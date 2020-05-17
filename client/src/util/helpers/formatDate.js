import moment from 'moment';

const formatDate = (date, isText) => {
  const d = new Date(date);
  const dateString = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  if (isText) {
    return moment(dateString).format('MMMM D');
  }
  else {
    return dateString
  }
}

export default formatDate;