import React from 'react';

interface NativeLinkProps {
  children: React.ReactNode;
  to: string;
  // All other props
  [x: string]: unknown;
}

const NativeLink: React.FC<NativeLinkProps> = ({
  children,
  to,
  ...props
}: NativeLinkProps): JSX.Element => {
  return (
    <a href={to} {...props} style={{ textDecoration: 'none' }}>
      {children}
    </a>
  );
};

export default NativeLink;
