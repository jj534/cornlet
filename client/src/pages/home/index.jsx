import React from 'react';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';
import Home from './Home';
import api from 'src/util/api';
import log from 'src/util/log';
import useRouter from 'src/util/hooks/useRouter';

const HomeIndex = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  firebase.auth().onAuthStateChanged((user) => {
    if (router.query.redirect !== 'new') {
      dispatch({
        type: 'AUTHING_SET',
        payload: false,
      });
    }

    if (user) {
      dispatch({
        type: 'USER_SET',
        payload: user,
      });

      if (router.query.redirect === 'new') {
        router.history.push('/new')
      }

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
    }
  });

  return <Home />;
};

export default HomeIndex;
