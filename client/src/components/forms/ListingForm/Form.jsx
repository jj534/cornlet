import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormContents from './FormContents';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import log from 'src/util/log';
import { useHistory } from 'react-router-dom';

const Form = styled.form`

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const FormComponent = ({ user, initialValues }) => {
  const history = useHistory();
  
  // configure inital values
  const defaultValues = {
      addr: '',
      price: 0,
      term: '',
      imgs: [],
      desc: ''
    }
  const dynInitValues = initialValues ? initialValues : defaultValues;
  
  // define form
  const formik = useFormik({
    initialValues: dynInitValues,
    validationSchema: Yup.object({
      addr: Yup.string()
        .required('Required'),
      price: Yup.number()
        .required('Required'),
      term: Yup.string()
        .required('Required'),
      imgs: Yup.array()
        .of(Yup.string())
        .required('Required'),
      desc: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      if (initialValues) {
        api.put(`/listing/${initialValues._id}/update`, values)
          .then((res) => {
            history.push('/profile')
          })
          .catch((e) => log(`ERROR ListingForm update`, e))
      } else {
        api.post('/listing/create', { ...values, user })
          .then(() => {
            history.push('/')
          })
          .catch((e) => {
            log(`ERROR new listing submit form`, e)
          })
      }
    },
  });
  
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormContents 
        formik={formik}
        user={user}
      />
      <Center>
        <Btn
          color='primary'
          inverted
          type='submit'
        >Save</Btn>
      </Center>
    </Form>
  )
};

export default FormComponent;
