import React from 'react';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';
import Home from './Home';

const HomeIndex = () => {
  const dispatch = useDispatch();
  
  firebase.auth().onAuthStateChanged((user) => {
    dispatch({
      type: 'AUTHING_SET',
      payload: false
    })
    
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
  });
  
  return <Home />;
};

export default HomeIndex;
