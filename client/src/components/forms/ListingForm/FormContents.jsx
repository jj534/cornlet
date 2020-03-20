import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Checkbox from 'src/components/inputs/Checkbox';
import Body from 'src/components/fonts/Body';

import CustomFileUpload from './CustomFileUpload';
import StartEnd from './StartEnd';

const Container = styled.div`
  & > * {
    margin: .5rem 0;
  }
`;

const FormContents = ({ formik, user }) => (
  <Container>
    <Input
      formik={formik}
      name="addr"
      label="Address"
    />
    <Input
      formik={formik}
      name="price"
      label="Price per Month"
      adornment="$"
    />
    <StartEnd
      formik={formik}
    />
    <Input
      formik={formik}
      name="desc"
      label="Description"
      multiline
    />
    <Body>*High quality images greatly increase the chance of attracting tenants</Body>
    <CustomFileUpload
      formik={formik}
      name="imgs"
      label="Photos"
      user={user}
    />
    <Checkbox
      formik={formik}
      name="active"
      label="Active"
    />
    <Checkbox
      formik={formik}
      name="sold"
      label="Mark as Sold"
    />
    <Body>*Your contact info will not be displayed if marked as sold</Body>
    {user.email === 'jj534@cornell.edu' && (
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
