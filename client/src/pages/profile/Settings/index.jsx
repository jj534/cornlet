import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import signOut from 'src/services/firebase/signOut';
import { useHistory } from 'react-router-dom';
import Btn from 'src/components/buttons/Btn';

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Settings = () => {
  const history = useHistory();
  const handleSignOut = async () => {
    await signOut();
    history.push('/');
  };
  
  return (
    <Container>
      <MainHeader />
      <Navbar />
      <Content>
        <Btn
          color="primary"
          type="button"
          onClick={handleSignOut}
        >
Sign Out
        </Btn>
      </Content>
    </Container>
  )
};

export default Settings;
