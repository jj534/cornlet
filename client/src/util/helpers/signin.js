import store from 'src/redux/store';

const signin = (options) => {
  window.open('http://localhost:8081/api/auth/google', '_self');
  store.dispatch({
    type: 'AUTHING_SET',
    payload: true,
  });
  if (options.redirectPath) {
    store.dispatch({
      type: 'REDIRECT_PATH_SET',
      payload: options.redirectPath,
    })
  }
}

export default signin;
