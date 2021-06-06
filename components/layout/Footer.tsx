import React from 'react';

const Footer: React.FC = (): JSX.Element => {
  return <footer>© {new Date().getFullYear()}, Footer</footer>;
};

export default Footer;
