import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import ChatroomList from '../ChatroomList';
import { useSelector } from 'react-redux';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Center = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
`;

const Chat = () => {
  const chatrooms = useSelector((state) => state.chatrooms);

  return (
    <Container>
      <MainHeader />
      <Navbar />
      <Content>
        {chatrooms.length === 0
          ? <Center><Body>No chats yet!</Body></Center>
          : <ChatroomList />
        }
      </Content>
    </Container>
  )
};

export default Chat;
