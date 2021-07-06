import { Category, PageMeta } from 'domain/types';
import { CategoriesRepo, PageMetaRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import CategoryTiles from 'components/shop/CategoryTiles/CategoryTiles';

interface ShopPageProps {
  categories: Array<Category>;
  pageMeta: PageMeta;
}

const ShopPage: React.FC<ShopPageProps> = ({ categories, pageMeta }): JSX.Element => {
  return (
    <Layout pageMeta={pageMeta}>
      <CategoryTiles categories={categories} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [categories, pageMeta] = await Promise.all([
    CategoriesRepo.get(),
    PageMetaRepo.getDefault()
  ]);

  return {
    props: {
      categories,
      pageMeta
    },
    revalidate: 30
  };
};

export default ShopPage;
