import formatDate from 'src/util/helpers/formatDate';

const getDateString = (listing) => {
  const { start, end } = listing;
  return `${formatDate(new Date(start), true)} ~ ${formatDate(new Date(end), true)}, ${new Date(end).getFullYear()}`;
}

export default getDateString;