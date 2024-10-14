import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

export const formatCategories = categories =>
  categories.map(el => ({ value: el, label: capitalizeFirstLetter(el) }));
