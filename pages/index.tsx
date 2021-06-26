import { ProductPreview, HeroSlide, Category, PageMeta } from 'domain/types';
import {
  CategoriesRepo,
  ProductPreviewsRepo,
  HeroSlidesRepo,
  PageMetaRepo
} from 'domain/repositories';
import HeroSlider from 'components/home/HeroSlider/HeroSlider';
import Layout from 'components/layout/Layout';
import FeaturedProducts from 'components/home/FeaturedProducts/FeaturedProducts';
import CategoryTiles from 'components/home/CategoryTiles/CategoryTiles';

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

      <FeaturedProducts products={featuredProducts} />

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
