import React, { useState } from 'react';
import { Step, StepContent, StepLabel, Stepper } from '@material-ui/core';

import { PersonalInfo } from 'domain/interfaces';
import PersonalInfoForm from '../PersonalInfoForm';

const CheckoutStepper: React.FC = (): JSX.Element => {
  const [activeStep, setActiveStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  const handleSavePersonalInfo = (values: PersonalInfo) => {
    setActiveStep(1);
    setPersonalInfo(values);
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      <Step>
        <StepLabel>Контактні дані</StepLabel>
        <StepContent>
          <PersonalInfoForm onSubmit={handleSavePersonalInfo} initialValues={personalInfo} />
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default CheckoutStepper;
