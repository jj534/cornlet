import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import firebase from 'src/services/firebase';
import { useDispatch } from 'react-redux';

const Container = styled.div`

`;

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
  return (
    <Container>
      <Home />
    </Container>
  )
};

export default HomeIndex;
