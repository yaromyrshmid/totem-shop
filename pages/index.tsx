import { ProductPreview, HeroSlide, Category } from 'domain/types';
import { CategoriesRepo, FeaturedProductsRepo, HeroSlidesRepo } from 'domain/repositories';
import HeroSlider from 'components/home/HeroSlider/HeroSlider';
import Layout from 'components/layout/Layout';
import FeaturedProducts from 'components/home/FeaturedProducts/FeaturedProducts';
import CategoryTiles from 'components/home/CategoryTiles/CategoryTiles';

interface HomeProps {
  heroSlides: Array<HeroSlide>;
  featuredProducts: Array<ProductPreview>;
  categories: Array<Category>;
}

const Home: React.FC<HomeProps> = ({ heroSlides, featuredProducts, categories }): JSX.Element => {
  return (
    <Layout>
      <HeroSlider heroSlides={heroSlides} />

      <FeaturedProducts products={featuredProducts} />

      <CategoryTiles categories={categories} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [heroSlides, featuredProducts, categories] = await Promise.all([
    HeroSlidesRepo.get(),
    FeaturedProductsRepo.get(),
    CategoriesRepo.get()
  ]);

  console.log(featuredProducts);

  return {
    props: {
      heroSlides,
      featuredProducts,
      categories
    }
  };
};

export default Home;
