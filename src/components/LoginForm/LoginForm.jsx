import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { loginValidationSchema } from '../../validation/validationSchema.js';
import Input from '../../shared/components/Input/Input.jsx';
import PasswordBtn from '../../shared/components/PasswordBtn/PasswordBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import CheckIcon from '../../shared/components/CheckIcon/CheckIcon.jsx';
import s from './LoginForm.module.scss';
import { EMAIL_REGEX } from '../../constants/index.js';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const email = watch('email');
  const password = watch('password');

  useEffect(() => {
    const checkPasswordStrength = password => {
      setIsPasswordSecure(password && password.length >= 7);
    };

    const checkEmailValidation = email => {
      setIsEmailValid(email && email.match(EMAIL_REGEX));
    };

    checkPasswordStrength(password);
    checkEmailValidation(email);
  }, [password, email]);

  const onSubmit = async ({ email, password }) => {
    console.log({ email, password });
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Email"
              error={!!email && !isEmailValid}
              check={!!email && isEmailValid}
              {...field}
            />
          )}
        />
        <div className={s.errorContainer}>
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
      </label>
      <label className={s.label}>
        <div className={s.passWrapper}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                error={!!password && !isPasswordSecure}
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
          {!errors.password &&
            !!password &&
            (isPasswordSecure ? (
              <p className={s.success}>Password is secure</p>
            ) : (
              <p className={s.error}>Password is too weak</p>
            ))}
        </div>
      </label>
      <Button type="submit" title="Log In" className={s.btn} />
    </form>
  );
};

export default LoginForm;
