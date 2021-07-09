import { Container } from '@material-ui/core';

import { PageMeta } from 'domain/types';
import { PageMetaRepo } from 'domain/repositories';
import Layout from 'components/layout/Layout';

interface CheckoutPageProps {
  pageMeta: PageMeta;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ pageMeta }): JSX.Element => {
  return (
    <Layout pageMeta={pageMeta}>
      <Container>
        <p>checkout</p>
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
