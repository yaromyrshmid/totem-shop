import { Container } from '@material-ui/core';

import { PageMeta } from 'domain/types';
import { PageMetaRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';
import { useCartProducts } from 'utils/hooks/useCartProducts';
import CheckoutProductList from 'components/checkout/CheckoutProductList/CheckoutProductList';
import CheckoutHeader from 'components/checkout/CheckoutHeader';
import { countTotalPrice } from 'utils/helpers/countTotalPrice';
import { openCart } from 'utils/apollo/vars/showCartVar';

interface CheckoutPageProps {
  pageMeta: PageMeta;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ pageMeta }): JSX.Element => {
  const { products } = useCartProducts();

  return (
    <Layout pageMeta={pageMeta} minimal>
      <Container>
        <CheckoutHeader total={countTotalPrice(products)} onEdit={openCart} />

        <CheckoutProductList products={products} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const pageMeta = await PageMetaRepo.getDefault();

  return {
    props: {
      pageMeta
    },
    revalidate: 86400 // 1 day
  };
};

export default CheckoutPage;
