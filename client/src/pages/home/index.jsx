import React from 'react';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';
import Home from './Home';
import api from 'src/util/api';
import log from 'src/util/log';

const HomeIndex = () => {
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged((user) => {
    dispatch({
      type: 'AUTHING_SET',
      payload: false,
    });

    if (user) {
      dispatch({
        type: 'USER_SET',
        payload: user,
      });

      api.get(`/user/${user.uid}/bm`)
        .then(({ data }) => {
          dispatch({
            type: 'BM_SET',
            payload: data,
          })
        })
        .catch(({ response }) => log('HomeIndex', response))
    } else {
      dispatch({
        type: 'USER_SET',
        payload: null,
      });
      dispatch({
        type: 'BM_SET',
        payload: {},
      })
    }
  });

  return <Home />;
};

export default HomeIndex;
