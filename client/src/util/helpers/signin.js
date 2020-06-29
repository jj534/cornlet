import store from 'src/redux/store';

const signin = () => {
  window.open('http://localhost:8081/api/auth/google', '_self');
  store.dispatch({
    type: 'AUTHING_SET',
    payload: true,
  });
}

export default signin;
