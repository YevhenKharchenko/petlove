import { parseISO, format } from 'date-fns';

export const formatDate = date => {
  if (!date) return;

  const parsedDate = parseISO(date);

  return format(parsedDate, 'dd.MM.yyyy');
};
