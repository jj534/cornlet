import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import ChatroomList from '../ChatroomList';
import { useSelector } from 'react-redux';
import Body from 'src/components/fonts/Body';

const Container = styled.div`

`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Chat = () => {
  const chatrooms = useSelector((state) => state.chatrooms);

  return (
    <Container>
      <MainHeader />
      <Navbar />
      {chatrooms.length === 0
        ? <Center><Body>No chats yet!</Body></Center>
        : <ChatroomList />
      }
    </Container>
  )
};

export default Chat;
