import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { loginValidationSchema } from '../../validation/validationSchema.js';
import { checkPasswordStrength, checkEmailValidation } from '../../utils/index.js';
import Input from '../../shared/components/Input/Input.jsx';
import PasswordBtn from '../../shared/components/PasswordBtn/PasswordBtn.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import CheckIcon from '../../shared/components/CheckIcon/CheckIcon.jsx';
import s from './LoginForm.module.scss';

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
    const timeoutId = setTimeout(() => {
      checkPasswordStrength(password, setIsPasswordSecure);
      checkEmailValidation(email, setIsEmailValid);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [password, email]);

  const onSubmit = async ({ email, password }) => {
    console.log({ email, password });
    reset();
    setIsEmailValid(false);
    setIsPasswordSecure(false);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" title="Log In" className={s.btn} />
    </form>
  );
};

export default LoginForm;
