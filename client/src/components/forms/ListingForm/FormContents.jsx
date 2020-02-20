import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/inputs/Input';
import Select from 'src/components/inputs/Select';
import CustomFileUpload from './CustomFileUpload';
import cfg from 'src/config';

const Container = styled.div`

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
    </Container>
  )
};

export default FormContents;
