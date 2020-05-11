import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: .5rem;
  }
`;

const Rooms = ({ formik }) => {
  return (
    <Container>
      <Input
        formik={formik}
        name="availRooms"
        width={10}
        margin='none'
      />
      <Body>bedroom(s) available in a</Body>
      <Input
        formik={formik}
        name="totalRooms"
        width={10}
        margin='none'
      />
      <Body>bedroom apartment / house</Body>
    </Container>
  )
};

export default Rooms;
