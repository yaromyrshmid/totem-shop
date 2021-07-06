import { Container } from '@material-ui/core';

import { ProductPreview, HeroSlide, Category, PageMeta } from 'domain/types';
import {
  CategoriesRepo,
  ProductPreviewsRepo,
  HeroSlidesRepo,
  PageMetaRepo
} from 'domain/repositories';
import HeroSlider from 'components/home/HeroSlider/HeroSlider';
import Layout from 'components/layout/Layout';
import FeaturedProducts from 'components/product/FeaturedProducts/FeaturedProducts';
import FeaturedProductsTitle from 'components/home/FeaturedProductsTitle';
import CategoryTiles from 'components/shop/CategoryTiles/CategoryTiles';

interface HomeProps {
  heroSlides: Array<HeroSlide>;
  featuredProducts: Array<ProductPreview>;
  categories: Array<Category>;
  pageMeta: PageMeta;
}

const Home: React.FC<HomeProps> = ({
  heroSlides,
  featuredProducts,
  categories,
  pageMeta
}): JSX.Element => {
  return (
    <Layout pageMeta={pageMeta}>
      <HeroSlider heroSlides={heroSlides} />

      <Container>
        <FeaturedProductsTitle />
        <FeaturedProducts products={featuredProducts} />
      </Container>

      <CategoryTiles categories={categories} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [heroSlides, featuredProducts, categories, pageMeta] = await Promise.all([
    HeroSlidesRepo.get(),
    ProductPreviewsRepo.getFeaturedProducts(),
    CategoriesRepo.get(),
    PageMetaRepo.getDefault()
  ]);

  return {
    props: {
      heroSlides,
      featuredProducts,
      categories,
      pageMeta
    },
    revalidate: 30
  };
};

export default Home;
