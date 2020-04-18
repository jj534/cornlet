import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import log from 'src/util/log';
import { useHistory } from 'react-router-dom';
import FormContents from './FormContents';
import guidelines from './guidelines';
import { formatDate } from 'src/util/helpers/date';

const Form = styled.form`

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const FormComponent = ({ user, initialValues }) => {
  const history = useHistory();

  // configure inital values
  const defaultValues = {
    addr: '',
    price: 0,
    start: new Date(),
    end: new Date(),
    imgs: [],
    desc: guidelines,
    active: true,
    sold: false,
  };
  const dynInitValues = initialValues || defaultValues;

  // define form
  const formik = useFormik({
    initialValues: dynInitValues,
    validationSchema: Yup.object({
      addr: Yup.string()
        .required('Required'),
      price: Yup.number()
        .required('Required'),
      start: Yup.object()
        .required('Required'),
      end: Yup.object()
        .required('Required'),
      imgs: Yup.array()
        .of(Yup.string())
        .required('Required'),
      desc: Yup.string()
        .required('Required'),
      active: Yup.boolean()
        .required('Required'),
      sold: Yup.boolean()
        .required('Required'),
    }),
    onSubmit: (values) => {
      const data = {
        ...values,
        dateString: `${formatDate(values.start)} ~ ${formatDate(values.end)}`
      }
      if (initialValues) {
        api.put(`/listing/${initialValues._id}/update`, data)
          .then(() => {
            history.push('/profile');
          })
          .catch((e) => log('ERROR ListingForm update', e));
      } else {
        api.post('/listing/create', { ...data, user })
          .then(() => {
            history.push('/profile/listings');
          })
          .catch((e) => {
            log('ERROR new listing submit form', e);
          });
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
          color="primary"
          inverted
          type="submit"
        >
Save
        </Btn>
      </Center>
    </Form>
  );
};

export default FormComponent;
