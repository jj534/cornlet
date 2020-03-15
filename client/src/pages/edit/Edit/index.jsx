import React from 'react';
import styled from 'styled-components';
import ListingForm from 'src/components/forms/ListingForm';
import BackHeader from 'src/components/headers/BackHeader';

const Container = styled.div`

`;

const Edit = ({ user, initialValues }) => (
  <Container>
    <BackHeader to="/profile" />
    <ListingForm
      user={user}
      initialValues={initialValues}
    />
  </Container>
);

export default Edit;
