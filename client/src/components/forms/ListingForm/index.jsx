import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled.div`

`;

const ListingFormIndex = ({ user, initialValues }) => {
  return (
    <Container>
      <Form
        user={user}
        initialValues={initialValues}
      />
    </Container>
  )
};

export default ListingFormIndex;
