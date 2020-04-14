import React from 'react';
import styled from 'styled-components';
import ListingCardUI from './ListingCardUI';

const Container = styled.div`

`;

const ListingCardIndex = ({ listing, edit, reload }) => (
  <Container>
    <ListingCardUI
      listing={listing}
      edit={edit}
      reload={reload}
    />
  </Container>
);

export default ListingCardIndex;
