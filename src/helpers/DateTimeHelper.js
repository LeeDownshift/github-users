import moment from 'moment';

export const formattedDate = (date) => {
  const parsed = moment(new Date(date));
  return parsed.format('D MMM YYYY');
} 