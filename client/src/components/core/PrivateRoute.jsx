import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import MainHeader from '../headers/MainHeader';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const authing = useSelector((state) => state.authing);
  const dispatch = useDispatch();

  if (!user && !authing) {
    window.open('http://localhost:8081/api/auth/google', '_self');
    dispatch({
      type: 'AUTHING_SET',
      payload: true,
    });
    return <div />;
  }

  if (authing) {
    return <MainHeader />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Component {...props} />
      )}
    />
  );
};

export default PrivateRoute;
