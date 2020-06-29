import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import MainHeader from '../headers/MainHeader';
import signin from 'src/util/helpers/signin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  const authing = useSelector((state) => state.authing);
  const dispatch = useDispatch();

  if (!user && !authing) {
    signin();
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
