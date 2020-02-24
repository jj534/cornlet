import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Select from 'src/components/inputs/Select';
import Checkbox from 'src/components/inputs/Checkbox';
import CustomFileUpload from './CustomFileUpload';
import cfg from 'src/config';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  & > * {
    margin: .5rem 0;
  }
`;

const FormContents = ({ formik, user}) => {
  return (
    <Container>
      <Input
        formik={formik}
        name='addr'
        label='Address'
      />
      <Input
        formik={formik}
        name='price'
        label='Price per Month'
        adornment='$'
      />
      <Select
        formik={formik}
        name='term'
        label='Term'
        opts={cfg.TERMS}
      />
      <Input
        formik={formik}
        name='desc'
        label='Description'
        multiline
      />
      <CustomFileUpload
        formik={formik}
        name='imgs'
        label='Photos'
        user={user}
      />
      <Checkbox
        formik={formik}
        name='active'
        label='Active'
      />
      <Checkbox
        formik={formik}
        name='sold'
        label='Mark as Sold'
      />
      <Body>*Your contact info will not be displayed if marked as sold</Body>
    </Container>
  )
};

export default FormContents;
