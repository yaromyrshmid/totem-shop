import * as yup from 'yup';

const phoneRegExp = /^\d{9}$/;

export const PersonalInfoSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Ім'я надто коротке")
    .max(50, "Ім'я надто довге")
    .required("Це обов'язкове поле"),
  middleName: yup
    .string()
    .min(2, 'По батькові надто коротке')
    .max(50, 'По батькові надто довге')
    .required("Це обов'язкове поле"),
  lastName: yup
    .string()
    .min(2, 'Прізвище надто коротке')
    .max(50, 'Прізвище надто довге')
    .required("Це обов'язкове поле"),
  email: yup.string().email('Не коректний e-mail').required("Це обов'язкове поле"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Не коректний номер телефону')
    .required("Це обов'язкове поле")
});
