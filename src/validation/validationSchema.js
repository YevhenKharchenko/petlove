import * as yup from 'yup';
import { EMAIL_REGEX } from '../constants/index.js';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').matches(EMAIL_REGEX, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
});

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').matches(EMAIL_REGEX, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
});
