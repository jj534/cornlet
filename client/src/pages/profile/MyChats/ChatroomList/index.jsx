import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ListElt from './ListElt';

const Container = styled.div`

`;

const ChatroomList = () => {
  const chatrooms = useSelector((state) => state.chatrooms);
  
  return (
    <Container>
      {chatrooms.map((chatroom) => (
        <ListElt key={chatroom._id} chatroom={chatroom} />
      ))}
    </Container>
  )
};

export default ChatroomList;
