import formatDate from 'src/util/helpers/formatDate';

const getDateString = (listing) => {
  const { start, end } = listing;
  const startYear = new Date(start).getFullYear() !== new Date(end).getFullYear()
    ? `, ${new Date(start).getFullYear()}`
    : ''
  return `${formatDate(new Date(start), true)}${startYear} ~ ${formatDate(new Date(end), true)}, ${new Date(end).getFullYear()}`;
}

export default getDateString;