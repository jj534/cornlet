import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ListElt from './ListElt';

const Container = styled.div`
  @media (min-width: ${props => props.theme.md}px) {
    width: 400px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
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
