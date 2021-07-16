import { Container } from '@material-ui/core';

import { NovaPoshtaCity, PageMeta } from 'domain/types';
import { PageMetaRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import { useCartProducts } from 'utils/hooks/useCartProducts';
import CheckoutProductList from 'components/checkout/CheckoutProductList/CheckoutProductList';
import CheckoutHeader from 'components/checkout/CheckoutHeader';
import { countTotalPrice } from 'utils/helpers/countTotalPrice';
import { openCart } from 'utils/apollo/vars/showCartVar';
import CheckoutStepper from 'components/checkout/CheckoutStepper/CheckoutStepper';
import { NovaPoshtaAPI } from 'domain/api';
import NovaPoshtaCitiesProvider from 'components/checkout/NovaPoshtaCitiesProvider';

interface CheckoutPageProps {
  pageMeta: PageMeta;
  novaPoshtaCities: NovaPoshtaCity[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ pageMeta, novaPoshtaCities }): JSX.Element => {
  const { products } = useCartProducts();

  return (
    <NovaPoshtaCitiesProvider cities={novaPoshtaCities}>
      <Layout pageMeta={pageMeta} minimal>
        <Container>
          <CheckoutHeader total={countTotalPrice(products)} onEdit={openCart} />

          <CheckoutProductList products={products} />

          <CheckoutStepper />
        </Container>
      </Layout>
    </NovaPoshtaCitiesProvider>
  );
};

export const getStaticProps = async () => {
  const [pageMeta, novaPoshtaCities] = await Promise.all([
    PageMetaRepo.getDefault(),
    NovaPoshtaAPI.getCities()
  ]);

  return {
    props: {
      pageMeta,
      novaPoshtaCities
    },
    revalidate: 86400 // 1 day
  };
};

export default CheckoutPage;
