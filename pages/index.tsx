import { ProductPreview, HeroSlide, Category, PageMeta } from 'domain/types';
import {
  CategoriesRepo,
  FeaturedProductsRepo,
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

const PAGE_SLUG = 'index';
export const getStaticProps = async () => {
  const [heroSlides, featuredProducts, categories, pageMeta] = await Promise.all([
    HeroSlidesRepo.get(),
    FeaturedProductsRepo.get(),
    CategoriesRepo.get(),
    PageMetaRepo.getBySlug(PAGE_SLUG)
  ]);

  return {
    props: {
      heroSlides,
      featuredProducts,
      categories,
      pageMeta
    }
  };
};

export default Home;
