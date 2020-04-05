import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';

const Container = styled.div`

`;

const MyChats = () => {
  return (
    <Container>
      <MainHeader />
      <Navbar />
        MyChats
    </Container>
  )
};

export default MyChats;
