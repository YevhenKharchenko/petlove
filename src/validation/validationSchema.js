import * as yup from 'yup';
import { REGEX } from '../constants/index.js';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').matches(REGEX.EMAIL, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
});

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').matches(REGEX.EMAIL, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
  matchedPassword: yup.string().required('Passwords do not match'),
});

export const userProfileValidationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().matches(REGEX.EMAIL, 'Invalid email format'),
  avatar: yup
    .string()
    .transform(value => (value === '' ? null : value))
    .nullable()
    .matches(REGEX.AVATAR, 'Avatar must be an image file'),
  phone: yup
    .string()
    .transform(value => (value === '' ? null : value))
    .nullable()
    .matches(REGEX.PHONE, 'Invalid phone format'),
});
