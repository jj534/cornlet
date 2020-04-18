import { formatDate } from 'src/util/helpers/date';

const getDateString = (listing) => {
  const { start, end, dateString } = listing;
  if (!dateString) {
    return `${formatDate(start)} ~ ${formatDate(end)}`;
  }
  else {
    return dateString;
  }
}

export default getDateString;