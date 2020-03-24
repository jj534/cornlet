import React from 'react';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';
import Home from './Home';

const HomeIndex = () => {
  const dispatch = useDispatch();
  
  // auth 
  const setUser = (user) => {
    console.log('user', user);
    if (user) {
      dispatch({
        type: 'USER_SET',
        payload: user,
      });
    } else {
      dispatch({
        type: 'USER_SET',
        payload: null,
      });
    }
  }
  
  firebase.auth().onAuthStateChanged((user) => {
    console.log('state change', user)
    setUser(user);
  });
  
  return <Home />;
};

export default HomeIndex;
