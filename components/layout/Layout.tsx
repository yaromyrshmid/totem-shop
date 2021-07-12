import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer/Footer';
import { PageMeta } from 'domain/types';
import { PageMetaContext } from 'utils/context/PageMetaContext';
import { openCart } from 'utils/apollo/vars/showCartVar';

interface LayoutProps {
  children: React.ReactNode;
  pageMeta: PageMeta;
  minimal?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, pageMeta, minimal = false }): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (isDesktop) setShowDrawer(false);
  }, [isDesktop]);

  const handleCloseDrawer = () => setShowDrawer(false);
  const handleOpenDrawer = () => setShowDrawer(true);

  return (
    <PageMetaContext.Provider value={pageMeta}>
      <Header onOpenDrawer={handleOpenDrawer} onOpenCart={openCart} hideNavigation={minimal} />

      {!isDesktop && !minimal && <Drawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />}

      {children}

      <Footer hideNavigation={minimal} />
    </PageMetaContext.Provider>
  );
};

export default Layout;
