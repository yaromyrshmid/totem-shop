import React, { ChangeEvent, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { DeliveryMethod } from 'domain/enums';
import { DeliveryInfo, NovaPoshtaDeliveryDetails } from 'domain/types';

interface DeliveryFormProps {
  onSubmit: (deliveryInfo: DeliveryInfo) => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onSubmit }): JSX.Element => {
  const [deliveryMethod, setDeliveryMethod] = useState<string>(DeliveryMethod.NEW_POST_OFFICE);

  const handleChange = (_: ChangeEvent<HTMLInputElement>, method: string) =>
    setDeliveryMethod(method);

  const handleContinue = (values: NovaPoshtaDeliveryDetails) => {
    onSubmit({ method: deliveryMethod, details: values });
  };

  return (
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
  );
};

export default DeliveryForm;
