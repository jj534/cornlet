import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StageBadges from 'src/components/displays/StateBadges';
import theme from 'src/theme';

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-right: .7rem;
  }
`;

const TextArea = styled.div`
  padding: 0 .2rem;
  width: ${theme.CARD_WIDTH}px;
`;

const Addr = styled.p`
  // font-size: 1.2rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: ${theme.CARD_WIDTH}px;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  // faded
  opacity: ${(props) => (props.faded ? '.5' : '')};
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .6rem 0 .4rem 0;
`;

const Price = styled.p`
  // font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
`;

const ListingCardUI = ({ listing, edit }) => {
  const {
    _id, addr, price, imgs, sold,
  } = listing;
  const path = edit ? `/listing/${_id}/edit` : `/listing/${_id}`;
  return (
    <Link to={path}>
      <Container>
        <Img
          src={imgs[0]}
          faded={sold}
        />
        <TextArea>
          <TopRow>
            <Addr>{addr}</Addr>
            <Price>{`$${price}`}</Price>
          </TopRow>
          <StageBadges
            listing={listing}
          />
        </TextArea>
      </Container>
    </Link>
  );
};

export default ListingCardUI;
