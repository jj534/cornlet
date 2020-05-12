import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Checkbox from 'src/components/inputs/Checkbox';
import Heading from 'src/components/fonts/Heading';

import CustomFileUpload from './CustomFileUpload';
import StartEnd from './StartEnd';
import Rooms from './Rooms';
import Incrementor from 'src/components/inputs/Incrementor';
import Select from 'src/components/inputs/Select';

const Container = styled.div`
  & > * {
    margin: .5rem 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InputContainer = styled.div`
  margin: 1rem 0;

  @media (min-width: ${props => props.theme.md}px) {
    max-width: 400px !important;
  }
`

const VerticalMargin = styled.div`
  margin: 2rem 0;
`

const MarginedHeading = styled(Heading)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const FormContents = ({ formik, user }) => (
  <Container>
  <MarginedHeading>Property Information</MarginedHeading>
    <Input
      formik={formik}
      name="addr"
      label="Address"
    />
    <InputContainer>
      <Row>
        <Input
          formik={formik}
          name="price"
          label="Price per Month"
          adornment="$"
          width={120}
        />
        <Select
          formik={formik}
          name='type'
          label='Property Type'
          opts={[{ label: 'Apartment', value: 'apt' }, { label: 'House', value: 'house' }, { label: 'Studio', value: 'studio' },]}
        />
      </Row>
    </InputContainer>
    <InputContainer>
      <Incrementor
        formik={formik}
        label='Total roooms in property'
        name='totalRooms'
      />
    </InputContainer>
    <InputContainer>
      <Incrementor
        formik={formik}
        label='Rooms available for sublet'
        name='availRooms'
      />
    </InputContainer>
    <InputContainer>
      <Incrementor
        formik={formik}
        label='Bathrooms'
        name='bathrooms'
        increment={.5}
      />
    </InputContainer>
    <VerticalMargin />
    <MarginedHeading>Duration</MarginedHeading>
    <StartEnd formik={formik} />
    <InputContainer>
      <Incrementor
        formik={formik}
        label='Female roommates during sublet'
        name='femaleRoommates'
      />
    </InputContainer>
    <InputContainer>
      <Incrementor
        formik={formik}
        label='Male roommates during sublet'
        name='maleRoommates'
      />
    </InputContainer>
    <VerticalMargin />
    <MarginedHeading>Description</MarginedHeading>
    <Input
      formik={formik}
      name="desc"
      label="Description"
      multiline
    />
    <MarginedHeading>Photos</MarginedHeading>
    <CustomFileUpload
      formik={formik}
      name="imgs"
      label="Photos"
      user={user}
    />
    <MarginedHeading>Settings</MarginedHeading>
    <Checkbox
      formik={formik}
      name="active"
      label="Active"
      sublabel='Only active listings will be available for others to view'
    />
    <Checkbox
      formik={formik}
      name="sold"
      label="Mark as Sold"
      sublabel='Your name and contact information will not be displayed if marked as sold'
    />
    <Checkbox
      formik={formik}
      name="cornellOnly"
      label="Restrict to Cornell"
      sublabel='Your name and contact information will only be visible to users signed in with a @cornell.edu email'
    />
    {user && user.email === 'jj534@cornell.edu' && (
      <div>
        <Input
          formik={formik}
          name="displayName"
          label="Display Name"
        />
        <Input
          formik={formik}
          name="displayEmail"
          label="Display Email"
        />
      </div>
    )}
  </Container>
);

export default FormContents;
