import React from 'react';
import styled from 'styled-components';
import Badge from 'src/components/displays/Badge';
import { Link } from 'react-router-dom';

const Container = styled.div`
`;

const WIDTH = 300;

const Img = styled.img`
  object-fit: cover;
  width: ${WIDTH}px;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`

const TextArea = styled.div`
  padding: 0 .2rem;
  width: ${WIDTH}px;
`

const Addr = styled.p`
  font-size: 1.2rem;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 .5rem 0;
`

const Price = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
`

const ListingCardUI = ({ listing, edit }) => {
  const { _id, addr, price, term, imgs } = listing;
  const path = edit ? `/listing/${_id}/edit` : `/listing/${_id}`;
  return (
    <Link to={path}>
      <Container>
        <Img
          src={imgs[0]}
        />
        <TextArea>
          <TopRow>
            <Addr>{addr}</Addr>
            <Price>{`$${price}`}</Price>
          </TopRow>
          <Badge color='primary' size='sm' inverted>{term}</Badge>
        </TextArea>
      </Container>
    </Link>
  )
};

export default ListingCardUI;
