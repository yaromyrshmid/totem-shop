import { ProductPreview, HeroSlide } from 'domain/types';
import { FeaturedProductsRepo, HeroSlidesRepo } from 'domain/repositories';
import HeroSlider from 'components/home/HeroSlider/HeroSlider';
import Layout from 'components/layout/Layout';
import FeaturedProducts from 'components/home/FeaturedProducts/FeaturedProducts';

interface HomeProps {
  heroSlides: Array<HeroSlide>;
  featuredProducts: Array<ProductPreview>;
}

const Home: React.FC<HomeProps> = ({ heroSlides, featuredProducts }): JSX.Element => {
  return (
    <Layout>
      <HeroSlider heroSlides={heroSlides} />

      <FeaturedProducts products={featuredProducts} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const [heroSlides, featuredProducts] = await Promise.all([
    HeroSlidesRepo.get(),
    FeaturedProductsRepo.get()
  ]);

  console.log(featuredProducts);

  return {
    props: {
      heroSlides,
      featuredProducts
    }
  };
};

export default Home;
