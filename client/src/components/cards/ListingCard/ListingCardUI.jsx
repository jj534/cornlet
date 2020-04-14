import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from 'src/components/displays/Badge';
import theme from 'src/theme';
import Body from 'src/components/fonts/Body';
import { formatDate, getDateDiff } from 'src/util/helpers/date';

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-right: .7rem;
  }
`;

const TextArea = styled.div`
  padding: 0 .2rem;
  width: ${theme.CARD_WIDTH}px;
`;

const Addr = styled(Body)`
  white-space: nowrap;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: .5rem;
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
  text-overflow: ellipsis;
`;

const Price = styled.p`
  color: ${(props) => props.theme.primary};
`;

const ListingCardUI = ({ listing, edit }) => {
  const {
    _id, addr, price, imgs, sold, start, end
  } = listing;
  const path = edit ? `/listing/${_id}/edit` : `/listing/${_id}`;
  const dateString = `${formatDate(start)} ~ ${formatDate(end)}`;
  
  return (
    <Link to={path}>
      <Container>
        <Img
          src={imgs[0]}
          faded={sold}
        />
        <TextArea>
          <TopRow>
            {sold
              ? <Badge color='primary' size='sm' inverted>Sold</Badge>
              : <Body muted sm>{dateString}</Body>
            }
            <Price>{`$${price}`}</Price>
          </TopRow>
          <Addr>{addr}</Addr>
        </TextArea>
      </Container>
    </Link>
  );
};

export default ListingCardUI;
