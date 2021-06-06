import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from '@material-ui/styles';

import { apolloClient } from '../apollo-client';
import { theme } from '../theme';
import { CssBaseline } from '@material-ui/core';

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
        <CssBaseline />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
