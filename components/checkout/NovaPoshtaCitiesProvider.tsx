import React from 'react';

import { NovaPoshtaCity } from 'domain/types';

interface NovaPoshtaCitiesProviderProps {
  cities: NovaPoshtaCity[];
  children: React.ReactNode;
}

export const NovaPoshtaCitiesContext = React.createContext<NovaPoshtaCity[]>([]);

const NovaPoshtaCitiesProvider: React.FC<NovaPoshtaCitiesProviderProps> = ({
  cities,
  children
}): JSX.Element => (
  <NovaPoshtaCitiesContext.Provider value={cities}>{children}</NovaPoshtaCitiesContext.Provider>
);

export default NovaPoshtaCitiesProvider;
