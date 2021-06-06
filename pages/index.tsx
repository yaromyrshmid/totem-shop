import { HeroSlide } from 'domain/types';
import { HeroSlidesRepo } from 'domain/repositories';
import HeroSlider from 'components/home/HeroSlider/HeroSlider';
import Layout from 'components/layout/Layout';

interface HomeProps {
  heroSlides: Array<HeroSlide>;
}

const Home: React.FC<HomeProps> = ({ heroSlides }): JSX.Element => {
  return (
    <Layout>
      <HeroSlider heroSlides={heroSlides} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const heroSlides = await HeroSlidesRepo.get();

  console.log(heroSlides);

  return {
    props: {
      heroSlides
    }
  };
};

export default Home;
