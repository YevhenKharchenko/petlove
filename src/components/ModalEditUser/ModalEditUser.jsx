import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { updateUser } from '../../redux/users/operations.js';
import { userProfileValidationSchema } from '../../validation/validationSchema.js';
import {
  selectAvatar,
  selectEmail,
  selectPhone,
  selectUsername,
} from '../../redux/users/selectors.js';
import { REGEX } from '../../constants/index.js';
import { sprite } from '../../assets/icons/index.js';
import CloseBtn from '../CloseBtn/CloseBtn.jsx';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import s from './ModalEditUser.module.scss';

const ModalEditUser = ({ closeModal }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const avatar = useSelector(selectAvatar);
  const name = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const [preview, setPreview] = useState(avatar);
  const [inputUrl, setInputUrl] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userProfileValidationSchema),
    defaultValues: {
      avatar,
      name,
      email,
      phone: phone || '+380',
    },
  });

  const handleUrlChange = e => {
    const url = e.target.value;
    setInputUrl(url);

    if (url.match(REGEX.AVATAR)) {
      setPreview(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    const selectedAvatar = e.target.files[0];

    if (selectedAvatar) {
      const objectURL = URL.createObjectURL(selectedAvatar);
      setPreview(objectURL);
    }
  };

  const onSubmit = async formData => {
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value !== '' && value !== null)
    );

    await dispatch(updateUser(filteredData));

    closeModal();
  };

  return (
    <section className={s.container}>
      <CloseBtn handleClick={closeModal} isHomePage={true} />
      <h2 className={s.title}>Edit information</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.imgWrapper}>
          {avatar.length ? (
            <img src={preview} alt="Avatar" width="80" height="80" className={s.img} />
          ) : (
            <svg className={s.img} width="94" height="94">
              <use xlinkHref={`${sprite}#icon-user`}></use>
            </svg>
          )}
        </div>
        <div className={s.fileInputWrapper}>
          <label>
            <Input
              type="text"
              className={s.pathInput}
              name="avatar"
              {...register('avatar')}
              placeholder="No file chosen"
              value={inputUrl}
              onChange={handleUrlChange}
            />
          </label>
          <label className={s.uploadLabel}>
            <input
              className={s.visuallyHidden}
              type="file"
              accept=".png, .jpg, .jpeg, .gif, .bmp, .webp"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button type="button" className={s.uploadBtn} onClick={handleUploadClick}>
              <span>Upload photo</span>
              <svg className={s.uploadIcon} width="18" height="18">
                <use xlinkHref={`${sprite}#icon-upload-cloud`}></use>
              </svg>
            </button>
          </label>
        </div>
        <div className={s.errorContainer}>
          {errors.avatar && <p className={s.error}>{errors.avatar.message}</p>}
        </div>
        <div className={s.labelWrapper}>
          <label className={s.label}>
            <Input
              type="text"
              name="name"
              {...register('name')}
              error={errors.username?.message}
              className={s.input}
            />
            <div className={s.errorContainer}>
              {errors.username && <p className={s.error}>{errors.username.message}</p>}
            </div>
          </label>
          <label className={s.label}>
            <Input
              type="text"
              name="email"
              {...register('email')}
              error={errors.email?.message}
              className={s.input}
            />
            <div className={s.errorContainer}>
              {errors.email && <p className={s.error}>{errors.email.message}</p>}
            </div>
          </label>
          <label className={s.label}>
            <Input
              type="text"
              name="phone"
              {...register('phone')}
              error={errors.phone?.message}
              className={s.input}
            />
            <div className={s.errorContainer}>
              {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
            </div>
          </label>
        </div>
        <Button className={s.goToBtn} title="Save" type="submit" />
      </form>
    </section>
  );
};

export default ModalEditUser;
