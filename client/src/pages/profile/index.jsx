import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Profile from './Profile';

const Container = styled.div`

`;

const ProfileIndex = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  if (!user) {
    history.push('/');
    return <div />;
  }
  return (
    <Container>
      <Profile
        user={user}
      />
    </Container>
  );
};

export default ProfileIndex;
