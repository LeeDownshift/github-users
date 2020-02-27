import moment from 'moment';

export const formattedDate = (date) => {
  const parsed = moment(new Date(date));
  return parsed.format('D MMM YYYY');
} 

export const formattedTime = (time) => {
  const parsed = moment(new Date(time));
  return parsed.format('LT');
} 

export const formattedDateTime = (dateTime) => {
  if (moment(dateTime, moment.ISO_8601, true).isValid()) {
    return `${formattedDate(dateTime)} at ${formattedTime(dateTime)}`;
  }
  return 'invalid format';
}