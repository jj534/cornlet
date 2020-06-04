import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftRaw } from 'src/assets/svgs/left.svg';
import { ReactComponent as HouseRaw } from 'src/assets/svgs/house.svg';
import { Avatar } from '@material-ui/core';
import useChatOtherUser from 'src/util/hooks/useChatOtherUser';
import Body from 'src/components/fonts/Body';
import getShortAddr from 'src/util/helpers/getShortAddr';
import { Link } from 'react-router-dom';
import RenderOn from 'src/containers/RenderOn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, .1);

  @media (min-width: ${props => props.theme.md}px) {
    padding: 1rem 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`

const LeftSVG = styled(LeftRaw)`
  height: 1.2rem;
  width: 1.2rem;
  fill: ${props => props.theme.primary};
  margin-right: 2rem;
`

const HouseSVG = styled(HouseRaw)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${props => props.theme.primary};
  margin-right: 1rem;
`

const ContactSection = styled.div`
  display: flex;
`

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1rem;
`

const Header = ({ chatroom }) => {
  const otherUser = useChatOtherUser(chatroom);
  return (
    <Container>
      <LeftSection>
        <RenderOn mobile>
          <Link to='/profile/chat'>
            <LeftSVG />
          </Link>
        </RenderOn>
        <ContactSection>
          <Avatar src={otherUser.photo} />
          <ContactText>
            <Body bold>{otherUser.name}</Body>
            <Body maxWidth={140} ellipsis>{getShortAddr(chatroom.listing.addr)}</Body>
          </ContactText>
        </ContactSection>
      </LeftSection>
      <Link to={`/listing/${chatroom.listing._id}`}>
        <HouseSVG />
      </Link>
    </Container>
  )
};

export default Header;
