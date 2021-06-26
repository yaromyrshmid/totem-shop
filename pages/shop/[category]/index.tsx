import { useRouter } from 'next/router';

import { Category, PageMeta, ProductPreview } from 'domain/types';
import { CategoriesRepo, PageMetaRepo, ProductPreviewsRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import CategoryNavigation from 'components/shop/CategoryNavigation/CategoryNavigation';

interface CategoryPageProps {
  categories: Array<Category>;
  pageMeta: PageMeta;
  products: Array<ProductPreview>;
  categorySlug: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  categories,
  pageMeta,
  products,
  categorySlug
}): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageMeta={pageMeta}>
      <CategoryNavigation categories={categories} categorySlug={categorySlug} />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const slugs = await CategoriesRepo.getSlugs();

  const paths = slugs.map(({ slug }) => ({ params: { category: slug } }));

  return {
    paths,
    fallback: true
  };
};

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
      pageMeta,
      products,
      categorySlug
    },
    revalidate: 30
  };
};

export default CategoryPage;
