import formatDate from 'src/util/helpers/formatDate';

const getDateString = (listing) => {
  const { start, end } = listing;
  return `${formatDate(start, true)} ~ ${formatDate(end, true)}, ${new Date(end).getFullYear()}`;
}

export default getDateString;