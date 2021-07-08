import React, { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer/Footer';
import { PageMeta } from 'domain/types';
import { PageMetaContext } from 'utils/context/PageMetaContext';

interface LayoutProps {
  children: React.ReactNode;
  pageMeta: PageMeta;
}

const Layout: React.FC<LayoutProps> = ({ children, pageMeta }): JSX.Element => {
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
    <PageMetaContext.Provider value={pageMeta}>
      <Header openDrawer={handleOpenDrawer} />

      {!isDesktop && <Drawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />}

      {children}
      <Footer />
    </PageMetaContext.Provider>
  );
};

export default Layout;
