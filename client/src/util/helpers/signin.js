import store from 'src/redux/store';

const signin = (options) => {
  const url = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8081/api/auth/google' 
    : `${process.env.REACT_APP_CLIENT_DOMAIN}/api/auth/google`;

  window.open(url, '_self');
  store.dispatch({
    type: 'AUTHING_SET',
    payload: true,
  });
  
  if (options && options.redirectPath) {
    store.dispatch({
      type: 'REDIRECT_PATH_SET',
      payload: options.redirectPath,
    })
  }
}

export default signin;
