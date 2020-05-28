import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import ChatroomList from '../ChatroomList';

const Container = styled.div`

`;

const Chat = () => {
  return (
    <Container>
      <MainHeader />
      <Navbar />
      <ChatroomList />
    </Container>
  )
};

export default Chat;
