import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { NovaPoshtaCitiesContext } from '../NovaPoshtaCitiesProvider';
import { NovaPoshtaCity, NovaPoshtaOffice } from 'domain/types';
import { NovaPoshtaAPI } from 'domain/api';

interface NovaPoshtaFormProps {
  onSubmit: (values: NovaPoshtaOffice) => void;
}

const NovaPoshtaForm: React.FC<NovaPoshtaFormProps> = ({ onSubmit }): JSX.Element => {
  const cities = useContext(NovaPoshtaCitiesContext);
  const [offices, setOffices] = useState<NovaPoshtaOffice[]>([]);
  const [selectedCity, setSelectedCity] = useState<NovaPoshtaCity | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<NovaPoshtaOffice | null>(null);
  const [officeError, setOfficeError] = useState('');

  const handleCityChange = (_: ChangeEvent<{}>, city: NovaPoshtaCity | null) => {
    setOffices([]);
    setSelectedOffice(null);
    setSelectedCity(city);
  };

  useEffect(() => {
    handleLoadOffices(selectedCity?.Ref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  const handleLoadOffices = async (cityRef: string | undefined) => {
    if (cityRef) {
      const offices = await NovaPoshtaAPI.getOfficesByCityRef(cityRef);

      if (offices) {
        setOffices(offices);
      }
    }
  };

  const handleOfficeChange = (_: ChangeEvent<{}>, office: NovaPoshtaOffice | null) => {
    setOfficeError('');
    setSelectedOffice(office);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (selectedOffice) onSubmit(selectedOffice);
    else setOfficeError('Оберіть, будь ласка, відділення');
  };

  return (
    <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
      <Grid item>
        <Autocomplete
          options={cities}
          getOptionLabel={(city) => city.Description}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Місто" variant="outlined" />}
          onChange={handleCityChange}
          value={selectedCity}
          noOptionsText="Не вдалось завантажити міста"
        />
      </Grid>

      <Grid item>
        <Autocomplete
          options={offices}
          getOptionLabel={(office) => office.Description}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Відділення"
              variant="outlined"
              error={!!officeError}
              helperText={officeError || ' '}
            />
          )}
          onChange={handleOfficeChange}
          value={selectedOffice}
          noOptionsText={selectedCity ? 'У місті немає відділень' : 'Оберіть, будь ласка, місто'}
        />
      </Grid>

      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Далі
        </Button>
      </Grid>
    </Grid>
  );
};

export default NovaPoshtaForm;
