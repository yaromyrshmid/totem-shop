import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { DeliveryMethod } from 'domain/enums';
import { DeliveryInfo, NovaPoshtaOffice } from 'domain/types';
import NovaPoshtaForm from './NovaPoshtaForm';

interface DeliveryFormProps {
  onSubmit: (deliveryInfo: DeliveryInfo) => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onSubmit }): JSX.Element => {
  const [deliveryMethod, setDeliveryMethod] = useState<string>(DeliveryMethod.NEW_POST_OFFICE);

  const handleChange = (_: ChangeEvent<HTMLInputElement>, method: string) =>
    setDeliveryMethod(method);

  const handleContinue = (values: NovaPoshtaOffice) => {
    onSubmit({ method: deliveryMethod, details: values });
  };

  return (
    <>
      <Box mb={2} mt={1}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Метод доставки</FormLabel>
          <RadioGroup
            aria-label="delivery"
            name="delivery"
            value={deliveryMethod}
            onChange={handleChange}
          >
            <FormControlLabel
              value={DeliveryMethod.NEW_POST_OFFICE}
              control={<Radio />}
              label="У відділення Нової Пошти"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {deliveryMethod === DeliveryMethod.NEW_POST_OFFICE && (
        <NovaPoshtaForm onSubmit={handleContinue} />
      )}
    </>
  );
};

export default DeliveryForm;
