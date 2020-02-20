import React from 'react';
import styled from 'styled-components';
import ListingForm from 'src/components/forms/ListingForm';
import BackHeader from 'src/components/headers/BackHeader';
import Heading from 'src/components/fonts/Heading';
import DynContainer from 'src/components/views/DynContainer';

const Container = styled.div`

`;

const New = ({ user }) => {
  return (
    <Container>
      <BackHeader />
      <DynContainer>
        <Heading>New Listing</Heading>
        <ListingForm 
          user={user}
        />
      </DynContainer>
    </Container>
  )
};

export default New;
