import React, { useState } from 'react';
import { Step, StepContent, StepLabel, Stepper } from '@material-ui/core';

import { PersonalInfo } from 'domain/interfaces';
import PersonalInfoForm from '../PersonalInfoForm';
import DeliveryForm from '../DeliveryForm/DeliveryForm';
import { DeliveryInfo } from 'domain/types';

const CheckoutStepper: React.FC = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null);

  const handleSavePersonalInfo = (values: PersonalInfo) => {
    setPersonalInfo(values);
    setActiveStep(1);
  };

  const handleSaveDeliveryInfo = (values: DeliveryInfo) => {
    setDeliveryInfo(values);
    setActiveStep(2);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step>
        <StepLabel>Контактні дані</StepLabel>
        <StepContent>
          <PersonalInfoForm onSubmit={handleSavePersonalInfo} initialValues={personalInfo} />
        </StepContent>
      </Step>

      <Step>
        <StepLabel>Доставка</StepLabel>
        <StepContent>
          <DeliveryForm onSubmit={handleSaveDeliveryInfo} />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default CheckoutStepper;
