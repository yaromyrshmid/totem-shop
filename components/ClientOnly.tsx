import { useEffect, useState } from 'react';

const clientOnly: React.FC<React.FC> = (Component: React.FC): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <></>;
  }

  return <Component />;
};

export default clientOnly;
