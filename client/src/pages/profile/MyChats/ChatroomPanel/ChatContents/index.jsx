import React from 'react';
import styled from 'styled-components';
import MsgGroup from './MsgGroup';

const Container = styled.div`
  height: 100%;
  padding: 1rem;
`;

const ChatContents = ({ chatroom }) => {
  console.log('chatroom', chatroom)
  return (
    <Container>
      {chatroom.msgs.length > 0 && chatroom.msgs.map((msg) => {
        const isOwner = msg.uid === chatroom.listing.user.uid;
        return (
          <MsgGroup
            user={isOwner ? chatroom.listing.user : chatroom.searcher}
            msgs={[msg]}
            isOwner={isOwner}
          />
        )
      })}
    </Container>
  )
};

export default ChatContents;
