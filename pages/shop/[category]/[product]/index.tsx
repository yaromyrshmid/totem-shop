import { useRouter } from 'next/router';

import { PageMeta, Product } from 'domain/types';
import { PageMetaRepo, ProductsRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';

interface ProductPageProps {
  pageMeta: PageMeta;
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ pageMeta, product }): JSX.Element => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageMeta={pageMeta}>
      <p>{JSON.stringify(product, null, 2)}</p>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const slugs = await ProductsRepo.getSlugs();

  const paths = slugs.map(({ slug, category: { slug: categorySlug } }) => ({
    params: { category: categorySlug, product: slug }
  }));

  return {
    paths,
    fallback: true
  };
};

interface ProductPageContext {
  params: { product: string; category: string };
}

export const getStaticProps = async (ctx: ProductPageContext) => {
  const {
    params: { product: productSlug }
  } = ctx;

  const [pageMeta, product] = await Promise.all([
    PageMetaRepo.getDefault(),
    ProductsRepo.getBySlug(productSlug)
  ]);

  return {
    props: {
      pageMeta,
      product
    },
    revalidate: 30
  };
};

export default ProductPage;
