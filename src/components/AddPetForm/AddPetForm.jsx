import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { addPetValidationSchema } from '../../validation/validationSchema.js';
import { speciesOptions } from '../../constants/selectOptions.js';
import { selectStyles } from '../../constants/selectStyles.js';
import { REGEX } from '../../constants/index.js';
import { sprite } from '../../assets/icons/index.js';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import s from './AddPetForm.module.scss';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(addPetValidationSchema) });

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

  return (
    <form className={s.form}>
      <fieldset className={s.fieldset}>
        <label>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="female" />
          <svg className={s.radioIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-female`}></use>
          </svg>
        </label>
        <label>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="male" />
          <svg className={s.radioIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-male`}></use>
          </svg>
        </label>
        <label>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="multiple" />
          <svg className={s.radioIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-multiple`}></use>
          </svg>
        </label>
      </fieldset>
      <div className={s.imgWrapper}>
        {/* {avatar.length ? (
          <img src={preview} alt="Avatar" width="80" height="80" className={s.img} />
        ) : ( */}
        <svg className={s.petImg} width="68" height="68">
          <use xlinkHref={`${sprite}#icon-paw`}></use>
        </svg>
        {/* )} */}
      </div>
      <div className={s.fileInputWrapper}>
        <label>
          <Input
            type="text"
            className={s.pathInput}
            {...register('imgUrl')}
            placeholder="Enter URL"
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
          <Input type="text" {...register('title')} className={s.input} placeholder="Title" />
          <div className={s.errorContainer}>
            {errors.username && <p className={s.error}>{errors.username.message}</p>}
          </div>
        </label>
        <label className={s.label}>
          <Input type="text" {...register('name')} className={s.input} placeholder="Pet’s Name" />
          <div className={s.errorContainer}>
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </div>
        </label>
      </div>
      <div className={s.bottomInputWrapper}>
        <label>
          <div
            className={s.dateWrapper}
            onClick={() => document.getElementById('date-input').focus()}
          >
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  id="date-input"
                  className={s.dateInput}
                  placeholderText=""
                  selected={field.value}
                  onChange={field.onChange}
                  dateFormat="dd/MM/yyyy"
                />
              )}
            />
            <svg className={s.calendarIcon} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-calendar`}></use>
            </svg>
          </div>
          <div className={s.errorContainer}>
            {errors.birthday && <p className={s.error}>{errors.birthday.message}</p>}
          </div>
        </label>
        <div className={s.selectWrapper}>
          <label className={s.selectLabel}>
            <Select
              className={s.select}
              styles={selectStyles}
              options={speciesOptions}
              name="species"
              components={{
                IndicatorSeparator: () => null,
              }}
            />
            <div className={s.errorContainer}>
              {errors.species && <p className={s.error}>{errors.species.message}</p>}
            </div>
          </label>
        </div>
      </div>
      <div className={s.btnWrapper}>
        <Button
          type="button"
          title="Back"
          className={s.backBtn}
          onClick={() => navigate('/profile')}
        />
        <Button type="submit" title="Submit" className={s.submitBtn} />
      </div>
    </form>
  );
};

export default AddPetForm;