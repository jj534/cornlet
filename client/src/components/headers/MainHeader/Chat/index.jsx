import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as ChatRaw } from 'src/assets/svgs/chat-square.svg';
import CornerRedDot from 'src/components/displays/CornerRedDot';
import { Link } from 'react-router-dom';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  position: relative;
  padding-right: .4rem;
`;

export const ChatSVG = styled(ChatRaw)`
  height: 1.6rem;
  width: 1.6rem;
  opacity: .7;
  cursor: pointer;
`;

const Chat = () => {
  const chatrooms = useSelector((state) => state.chatrooms);
  const user = useSelector((state) => state.user);
  let hasNotif = false;
  if (user) {
    chatrooms.forEach((chatroom) => {
      if (chatroom.notifUids.includes(user.uid)) {
        hasNotif = true;
      }
    });
  }

  return (
    <Link to="/profile/chat">
      <Container>
        <Body bold>Inbox</Body>
        {hasNotif && <CornerRedDot />}
      </Container>
    </Link>
  );
};

export default Chat;
