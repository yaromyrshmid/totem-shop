import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';
import { useMediaQuery, useTheme } from '@material-ui/core';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setShowDrawer(false);
    }
  }, [isDesktop]);

  const handleCloseDrawer = () => {
    setShowDrawer(false);
  };

  const handleOpenDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <CssBaseline />

      <Header openDrawer={handleOpenDrawer} pageTitle={title} />

      {!isDesktop && <Drawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />}

      {children}
      <Footer />
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.cart.items,
//   }
// }

export default Layout;
