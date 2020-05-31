import React from 'react';
import styled from 'styled-components';
import useChatOtherUser from 'src/util/hooks/useChatOtherUser';
import Body from 'src/components/fonts/Body';
import Avatar from 'src/components/displays/Avatar';
import getShortAddr from 'src/util/helpers/getShortAddr';
import { Link } from 'react-router-dom';
import formatDate from 'src/util/helpers/formatDate';

const Container = styled.div`
  display: flex;
  padding: 1rem 0;
`;

export const PhotoSection = styled.div`
  margin-right: 1rem;
`;

export const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: .2rem;
`;

export const TextContainer = styled.div`
  max-width: 140px;
`;

const ListElt = ({ chatroom }) => {
  const otherUser = useChatOtherUser(chatroom);

  return (
    <Link to={`/profile/chat/${chatroom._id}`}>
      <Container>
        <PhotoSection>
          <Avatar
            src={otherUser.photoURL || otherUser.photo}
            lg
          />
        </PhotoSection>
        <TextSection>
          <Row>
            <Body bold>{otherUser.name}</Body>
            <TextContainer>
              <Body color='primary' ellipsis>{getShortAddr(chatroom.listing.addr)}</Body>
            </TextContainer>
          </Row>
          <Row>
            <TextContainer>
              <Body muted>{chatroom.msgs[chatroom.msgs.length-1].content}</Body>
            </TextContainer>
            <Body muted>{formatDate(chatroom.updatedAt, true)}</Body>
          </Row>
        </TextSection>
      </Container>
    </Link>
  )
};

export default ListElt;
