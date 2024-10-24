export const BREAKPOINT = {
  MOBILE: '375',
  TABLET: '768',
  DESKTOP: '1280',
};

export const REGEX = {
  EMAIL: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  AVATAR: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  PHONE: /^\+38\d{10}$/,
  BIRTHDAY: /^\d{4}-\d{2}-\d{2}$/,
};

export const MAX_RATING = 5;

export const PLACEHOLDER = {
  ADDRESS: 'Website only',
  WORK_DAYS: 'Day and night',
};

export const DEFAULT_OPTION = { value: '', label: 'Show all' };

export const STYLES = {
  PLACEHOLDER_COLOR: 'rgba(38, 38, 38, 0.5)',
  PRIMARY_FONT_FAMILY: 'Manrope, sans-serif',
  PRIMARY_TEXT_COLOR: '#262626',
  PRIMARY_ACCENT_COLOR: '#f6b83d',
  PRIMARY_BORDER_COLOR: 'rgba(38, 38, 38, 0.15)',
};

export const CLOUDINARY = {
  CLOUD_NAME: import.meta.env.VITE_CLOUD_NAME,
  UNSIGNED_PRESET_NAME: import.meta.env.VITE_UNSIGNED_PRESET_NAME,
};
