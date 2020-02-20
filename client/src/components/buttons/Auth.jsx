import React from 'react';
import styled from 'styled-components';
import signIn from 'src/services/firebase/signIn';
import { ReactComponent as Google } from 'src/assets/svgs/google.svg';
import { useSelector } from 'react-redux';
import Avatar from 'src/components/displays/Avatar';

const SignIn = styled(Google)`
  height: 30px;
  width: 30px
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  background: white;
  padding: .5rem;
  border-radius: 5px;
  cursor: pointer;
`

const Container = styled.div`

`;

const Auth = () => {
  const user = useSelector((state) => state.user);
  if (user) return (
      <Avatar
        src={user.photoURL}
        path={`/profile`}
      />
    )
  return (
    <Container>
      <SignIn onClick={signIn}/>
    </Container>
  )
};

export default Auth;
