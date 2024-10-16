import { format, parseISO } from 'date-fns';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { getSpecies } from '../../redux/notices/operations.js';
import { selectSpecies } from '../../redux/notices/selectors.js';
import { addPet } from '../../redux/auth/operations.js';
import { addPetValidationSchema } from '../../validation/validationSchema.js';
import { categoriesStyles } from '../../constants/selectStyles.js';
import { saveFileToCloudinary } from '../../services/index.js';
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
  const species = useSelector(selectSpecies);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(addPetValidationSchema),
  });

  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch]);

  const handleUrlChange = e => {
    const url = e.target.value;
    setInputUrl(url);
    setValue('imgURL', url);

    if (url.match(REGEX.AVATAR)) {
      setPreview(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async e => {
    const selectedAvatar = e.target.files[0];

    if (selectedAvatar) {
      const objectURL = URL.createObjectURL(selectedAvatar);
      setPreview(objectURL);

      const filePath = await saveFileToCloudinary(selectedAvatar);

      if (filePath) {
        setPreview(filePath);
        setInputUrl(filePath);
        setValue('imgURL', filePath);
      }
    }
  };

  const onSubmit = async data => {
    await dispatch(addPet(data));
    navigate('/profile');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={s.fieldset}>
        <label className={s.femaleLabel}>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="female" />
          <svg className={s.femaleIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-female`}></use>
          </svg>
        </label>
        <label className={s.maleLabel}>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="male" />
          <svg className={s.maleIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-male`}></use>
          </svg>
        </label>
        <label className={s.multipleLabel}>
          <input type="radio" className={s.visuallyHidden} {...register('sex')} value="multiple" />
          <svg className={s.multipleIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-multiple`}></use>
          </svg>
        </label>
      </fieldset>
      <div className={s.imgWrapper}>
        {preview.length ? (
          <img src={preview} alt="Avatar" width="68" height="68" className={s.img} />
        ) : (
          <svg className={s.img} width="68" height="68">
            <use xlinkHref={`${sprite}#icon-paw`}></use>
          </svg>
        )}
      </div>
      <div className={s.fileInputWrapper}>
        <label>
          <Input
            type="text"
            className={s.pathInput}
            {...register('imgURL')}
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
        {errors.imgURL && <p className={s.error}>{errors.imgURL.message}</p>}
      </div>
      <div className={s.labelWrapper}>
        <label className={s.label}>
          <Input type="text" {...register('title')} className={s.input} placeholder="Title" />
          <div className={s.errorContainer}>
            {errors.title && <p className={s.error}>{errors.title.message}</p>}
          </div>
        </label>
        <label className={s.label}>
          <Input type="text" {...register('name')} className={s.input} placeholder="Pet’s Name" />
          <div className={s.errorContainer}>
            {errors.name && <p className={s.error}>{errors.name.message}</p>}
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
              name="birthday"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  id="date-input"
                  className={s.dateInput}
                  placeholderText="Birthday"
                  selected={value ? parseISO(value) : null}
                  onChange={date => {
                    if (date) {
                      const formattedDate = format(date, 'yyyy-MM-dd');
                      onChange(formattedDate);
                    } else {
                      onChange(null);
                    }
                  }}
                  onBlur={onBlur}
                  dateFormat="yyyy-MM-dd"
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
            <Controller
              name="species"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  inputRef={ref}
                  id="species-select"
                  placeholder="Category"
                  styles={categoriesStyles}
                  options={species}
                  value={species.find(option => option.value === value)}
                  onChange={selectedOption => {
                    onChange(selectedOption.value);
                  }}
                  onBlur={onBlur}
                />
              )}
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
