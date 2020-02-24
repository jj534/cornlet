import React from 'react';
import Home from './Home';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';

const HomeIndex = () => {
  const dispatch = useDispatch();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: 'USER_SET',
        payload: user
      })
    } else {
      dispatch({
        type: 'USER_SET',
        payload: null
      })
    }
  });
  return <Home />
};

export default HomeIndex;
