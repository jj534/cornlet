import store from 'src/redux/store';

const signin = (options) => {
  window.open(`${process.env.REACT_APP_CLIENT_DOMAIN}/api/auth/google', '_self`);
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
