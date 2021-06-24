import { Category, PageMeta } from 'domain/types';
import { CategoriesRepo, PageMetaRepo, ProductPreviewsRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import CategoryTiles from 'components/home/CategoryTiles/CategoryTiles';

interface CategoryPageProps {
  categories: Array<Category>;
  pageMeta: PageMeta;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categories, pageMeta }): JSX.Element => {
  return (
    <Layout pageMeta={pageMeta}>
      <CategoryTiles categories={categories} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const slugs = await CategoriesRepo.getSlugs();

  const paths = slugs.map(({ slug }) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: true
  };
}

interface CategoryPageContext {
  params: { category: string };
}

export const getStaticProps = async (ctx: CategoryPageContext) => {
  const {
    params: { category: categorySlug }
  } = ctx;

  const [categories, pageMeta, products] = await Promise.all([
    CategoriesRepo.get(),
    PageMetaRepo.getDefault(),
    ProductPreviewsRepo.getProductsByCategorySlug(categorySlug)
  ]);

  return {
    props: {
      categories,
      pageMeta
    },
    revalidate: 120
  };
};

export default CategoryPage;
