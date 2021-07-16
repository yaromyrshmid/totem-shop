import React from 'react';
import { useFormik } from 'formik';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';

import { PersonalInfo } from 'domain/interfaces';
import { PersonalInfoSchema } from 'domain/schemas';

interface PersonalInfoFormProps {
  onSubmit: (values: PersonalInfo) => void;
  initialValues: PersonalInfo | null;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  onSubmit,
  initialValues
}): JSX.Element => {
  const {
    values: { firstName, middleName, lastName, email, phoneNumber },
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  } = useFormik({
    initialValues: initialValues || {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    },
    validationSchema: PersonalInfoSchema,
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <Grid container component="form" onSubmit={handleSubmit} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Прізвище"
          variant="outlined"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && !!errors.lastName}
          helperText={(touched.lastName && errors.lastName) || ' '}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Ім'я"
          variant="outlined"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && !!errors.firstName}
          helperText={(touched.firstName && errors.firstName) || ' '}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="По батькові"
          variant="outlined"
          name="middleName"
          value={middleName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.middleName && !!errors.middleName}
          helperText={(touched.middleName && errors.middleName) || ' '}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="E-mail"
          variant="outlined"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && !!errors.email}
          helperText={(touched.email && errors.email) || ' '}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Мобільний телефон"
          variant="outlined"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phoneNumber && !!errors.phoneNumber}
          helperText={(touched.phoneNumber && errors.phoneNumber) || ' '}
          InputProps={{
            startAdornment: <InputAdornment position="start">+380</InputAdornment>
          }}
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

export default PersonalInfoForm;
