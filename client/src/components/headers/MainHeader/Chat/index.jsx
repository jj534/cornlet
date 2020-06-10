import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as ChatRaw } from 'src/assets/svgs/chat-square.svg';
import CornerRedDot from 'src/components/displays/CornerRedDot';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  padding-right: .2rem;
`;

export const ChatSVG = styled(ChatRaw)`
  height: 1.6rem;
  width: 1.6rem;
  opacity: .7;
  cursor: pointer;
`;

const Chat = () => {
  const authing = useSelector(state => state.authing);
  const chatrooms = useSelector(state => state.chatrooms);
  const user = useSelector(state => state.user);
  let hasNotif = false;
  chatrooms.forEach((chatroom) => {
    if (chatroom.notifUids.includes(user.uid)) {
      hasNotif = true;
    }
  })

  return (
    <Link to='/profile/chat'>
      <Container>
        {!authing && <ChatSVG />}
        {hasNotif && <CornerRedDot />}
      </Container>
    </Link>
  )
};

export default Chat;
