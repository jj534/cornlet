const log = (txt, data = null) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(txt, data);
  }
};

export default log;
