import { useRouter } from 'next/router';

import { PageMeta, Product } from 'domain/types';
import { PageMetaRepo, ProductsRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import ProductComponent from 'components/product/Product';

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
      <ProductComponent product={product} />
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
    params: { product: productSlug, category: categorySlug }
  } = ctx;

  const [pageMeta, productId] = await Promise.all([
    PageMetaRepo.getDefault(),
    ProductsRepo.getIdBySlug(productSlug)
  ]);

  if (!productId) return { notFound: true };

  const product = await ProductsRepo.getById(productId);

  if (!product || categorySlug !== product.category.slug) return { notFound: true };

  return {
    props: {
      pageMeta,
      product
    },
    revalidate: 30
  };
};

export default ProductPage;
