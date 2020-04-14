export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export const getDateDiff = (future, past) => {
  const oneDay = 24 * 60 * 60 * 1000; 
  
  return Math.round(Math.abs((new Date(future) - new Date(past)) / oneDay));
}