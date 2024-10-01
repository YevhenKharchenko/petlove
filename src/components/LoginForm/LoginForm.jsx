import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { loginValidationSchema } from '../../validation/validationSchema.js';
import s from './LoginForm.module.scss';
import Input from '../../shared/components/Input/Input.jsx';
import PasswordBtn from '../../shared/components/PasswordBtn/PasswordBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const password = watch('password');

  useEffect(() => {
    const checkPasswordStrength = password => {
      if (password && password.length >= 7) {
        setIsPasswordSecure(true);
      } else {
        setIsPasswordSecure(false);
      }
    };

    checkPasswordStrength(password);
  }, [password]);

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
              type="email"
              placeholder="Email"
              className={errors.email ? s.errorInput : s.normalInput}
              {...field}
            />
          )}
        />
        <div className={s.errorContainer}>
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
      </label>
      <label className={s.label}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={
                errors.password ? s.errorInput : isPasswordSecure ? s.successInput : s.normalInput
              }
              {...field}
            />
          )}
        />
        <PasswordBtn
          showPass={showPassword}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
        <div className={s.errorContainer}>
          {errors.password && <p className={s.error}>{errors.password.message}</p>}
          {isPasswordSecure && <p className={s.success}>Password is secure</p>}
        </div>
      </label>
      <Button type="submit" title="Log In" className={s.btn} />
    </form>
  );
};

export default LoginForm;
