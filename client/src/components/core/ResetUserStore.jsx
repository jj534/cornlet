import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`

`;

const ResetUserStore = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  if (user && (user.displayName || !user.name)) {
    dispatch({
      type: 'USER_SET',
      payload: null,
    })
  }

  // user env emulation in dev
  useEffect(() => {
    // if (process.env.NODE_ENV === 'development') {
    //   const emulationData = {
    //     bm: { listings: [], notif: false },
    //     chatrooms: [],
    //     _id: '5f07c79147f8400017c27652',
    //     uid: '110200881369188042103',
    //     name: 'Chanchal Pramanik',
    //     photo: 'https://lh3.googleusercontent.com/a-/AOh14GjIPuBCNUcEBuRjHuftmG5gOV-x7AWCLaKipN7MuQ',
    //     email: 'cpramanik@gmail.com',
    //   }
    //   dispatch({
    //     type: 'USER_SET',
    //     payload: emulationData,
    //   })
    // }
  }, [])

  // create test scenario: flawed user schema saved to redux store
  // useEffect(() => {
  //   dispatch({
  //     type: 'USER_SET',
  //     payload: {
  //       displayName: 'test displayName',
  //       name: undefined,
  //     }
  //   })
  // }, [])

  return <div />;
};

export default ResetUserStore;
