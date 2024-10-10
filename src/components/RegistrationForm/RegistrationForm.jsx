import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerValidationSchema } from '../../validation/validationSchema.js';
import {
  checkPasswordStrength,
  checkEmailValidation,
  checkUsernameValidation,
  checkPasswordMatch,
} from '../../utils/index.js';
import { registerUser } from '../../redux/auth/operations.js';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/components/Input/Input.jsx';
import PasswordBtn from '../../shared/components/PasswordBtn/PasswordBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import CheckIcon from '../../shared/components/CheckIcon/CheckIcon.jsx';
import s from './RegistrationForm.module.scss';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setShowMatchPassword] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerValidationSchema) });

  const username = watch('name');
  const email = watch('email');
  const password = watch('password');
  const matchedPassword = watch('matchedPassword');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      checkPasswordStrength(password, setIsPasswordSecure);
      checkEmailValidation(email, setIsEmailValid);
      checkUsernameValidation(username, setIsUsernameValid);
      checkPasswordMatch(password, matchedPassword, setIsPasswordMatch);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [password, email, username, matchedPassword]);

  const onSubmit = async ({ name, email, password }) => {
    if (!isPasswordMatch) return;

    console.log({ name, email, password });
    await dispatch(registerUser({ name, email, password }));
    reset();
    setIsPasswordSecure(false);
    setIsEmailValid(false);
    setIsUsernameValid(false);
    setIsPasswordMatch(false);
    navigate('/profile');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        <div className={s.inputWrapper}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Name"
                error={(!!username && !isUsernameValid) || !!errors.name}
                check={!!username && isUsernameValid}
                {...field}
              />
            )}
          />
          {!!username && <CheckIcon isChecked={isUsernameValid} className={s.emailCheck} />}
        </div>
        <div className={s.errorContainer}>
          {errors.name && <p className={s.error}>{errors.name.message}</p>}
        </div>
      </label>
      <label className={s.label}>
        <div className={s.inputWrapper}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Email"
                error={(!!email && !isEmailValid) || !!errors.email}
                check={!!email && isEmailValid}
                {...field}
              />
            )}
          />
          {!!email && <CheckIcon isChecked={isEmailValid} className={s.emailCheck} />}
        </div>
        <div className={s.errorContainer}>
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
      </label>
      <label className={s.label}>
        <div className={s.inputWrapper}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                error={(!!password && !isPasswordSecure) || !!errors.password}
                check={!!password && isPasswordSecure}
                {...field}
              />
            )}
          />
          {!!password && <CheckIcon isChecked={isPasswordSecure} />}
          <PasswordBtn
            showPass={showPassword}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>
        <div className={s.errorContainer}>
          {errors.password && <p className={s.error}>{errors.password.message}</p>}
          {!errors.password && !!password && (
            <p className={isPasswordSecure ? s.success : s.error}>
              {isPasswordSecure ? 'Password is secure' : 'Password is too weak'}
            </p>
          )}
        </div>
      </label>
      <label className={s.label}>
        <div className={s.inputWrapper}>
          <Controller
            name="matchedPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type={showMatchPassword ? 'text' : 'password'}
                placeholder="Confirm password"
                error={(!!matchedPassword && !isPasswordMatch) || !!errors.password}
                check={!!matchedPassword && isPasswordMatch}
                {...field}
              />
            )}
          />
          {!!matchedPassword && <CheckIcon isChecked={isPasswordMatch} />}
          <PasswordBtn
            showPass={showMatchPassword}
            onClick={() => {
              setShowMatchPassword(!showMatchPassword);
            }}
          />
        </div>
        <div className={s.errorContainer}>
          {errors.matchedPassword && <p className={s.error}>{errors.matchedPassword.message}</p>}
          {!!matchedPassword &&
            (isPasswordMatch ? (
              <p className={s.success}>Passwords match</p>
            ) : (
              <p className={s.error}>Passwords do not match</p>
            ))}
        </div>
      </label>
      <Button type="submit" title="Registration" className={s.btn} />
    </form>
  );
};

export default RegistrationForm;
