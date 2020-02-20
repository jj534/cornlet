import React from 'react';
import styled from 'styled-components';
import ListingForm from 'src/components/forms/ListingForm';
import BackHeader from 'src/components/headers/BackHeader';
import DynContainer from 'src/components/views/DynContainer';

const Container = styled.div`

`;

const Edit = ({ user, initialValues }) => {
  return (
    <Container>
      <BackHeader />
      <DynContainer>
        <ListingForm
          user={user}
          initialValues={initialValues}
        />
      </DynContainer>
    </Container>
  )
};

export default Edit;
