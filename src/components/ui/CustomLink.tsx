import React from 'react';
import { Link } from 'gatsby';

interface CustomLinkProps {
  children: React.ReactNode;
  to: string;
  // All other props
  [x: string]: unknown;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  to,
  ...props
}: CustomLinkProps): JSX.Element => (
  <Link to={to} {...props} style={{ textDecoration: 'none' }}>
    {children}
  </Link>
);

export default CustomLink;
