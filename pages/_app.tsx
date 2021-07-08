import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from '@material-ui/styles';

import { apolloClient } from '../utils/apollo/apollo-client';
import { theme } from '../theme';
import { CssBaseline } from '@material-ui/core';
import CartProvider from 'components/cart/CartProvider';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <CartProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </CartProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
