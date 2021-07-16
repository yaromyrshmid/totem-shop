import React, { useContext } from 'react';

import { NovaPoshtaCitiesContext } from '../NovaPoshtaCitiesProvider';

interface NovaPoshtaFormProps {}

const NovaPoshtaForm: React.FC<NovaPoshtaFormProps> = (): JSX.Element => {
  const cities = useContext(NovaPoshtaCitiesContext);
  console.log({ cities });

  return (
    <div>
      <p>teset</p>
    </div>
  );
};

export default NovaPoshtaForm;
