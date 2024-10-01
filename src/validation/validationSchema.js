import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters')
    .required('Password is required'),
});
