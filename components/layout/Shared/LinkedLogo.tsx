import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from 'public/logo.svg';
import CustomA from 'components/ui/links/CustomA';

const LinkedLogo: React.FC = (): JSX.Element => {
  return (
    <Link href="/" passHref>
      <CustomA>
        <Image src={logo} alt="Totem logo" height={54} width={147} />
      </CustomA>
    </Link>
  );
};

export default LinkedLogo;
