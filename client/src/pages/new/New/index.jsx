import React from 'react';
import styled from 'styled-components';
import ListingForm from 'src/components/forms/ListingForm';
import BackHeader from 'src/components/headers/BackHeader';
import Heading from 'src/components/fonts/Heading';

const Container = styled.div`

`;

const New = ({ user }) => (
  <Container>
    <BackHeader />
    <Heading>New Listing</Heading>
    <ListingForm
      user={user}
    />
  </Container>
);

export default New;
