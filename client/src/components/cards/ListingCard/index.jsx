import React from 'react';
import styled from 'styled-components';
import ListingCardUI from './ListingCardUI';

const Container = styled.div`

`;

const ListingCardIndex = ({ listing, edit }) => {
  return (
    <Container>
      <ListingCardUI
        listing={listing}
        edit={edit}
      />
    </Container>
  )
};

export default ListingCardIndex;
