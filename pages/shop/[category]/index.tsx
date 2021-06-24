import { Category, PageMeta } from 'domain/types';
import { CategoriesRepo, PageMetaRepo } from 'domain/repositories';
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

const PAGE_SLUG = 'index';
export const getStaticProps = async () => {
  const [categories, pageMeta] = await Promise.all([
    CategoriesRepo.get(),
    PageMetaRepo.getBySlug(PAGE_SLUG)
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
