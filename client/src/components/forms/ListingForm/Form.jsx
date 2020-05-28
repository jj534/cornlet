import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Btn from 'src/components/buttons/Btn';
import api from 'src/util/api';
import log from 'src/util/log';
import { useHistory } from 'react-router-dom';
import FormContents from './FormContents';
import { signIn } from 'src/services/firebase';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from 'src/util/hooks/useRouter';

const Form = styled.form`
  @media (min-width: ${props => props.theme.md}px) {
    max-width: 700px;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const FormComponent = ({ user, initialValues }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const tempValues = useSelector(state => state.tempValues);
  const authing = useSelector(state => state.authing);
  const router = useRouter();

  // configure inital values
  const defaultValues = {
    addr: '',
    price: 0,
    start: new Date(),
    end: new Date(),
    type: '',
    totalRooms: 0,
    availRooms: 0,
    bathrooms: 0,
    femaleRoommates: 0,
    maleRoommates: 0,
    amenities: [],
    imgs: [],
    desc: '',
    active: true,
    sold: false,
    cornellOnly: false,
  };
  const devValues = {
    addr: 'test addr',
    price: 100,
    start: new Date(),
    end: new Date(),
    type: 'apt',
    totalRooms: 3,
    availRooms: 1,
    bathrooms: 1.5,
    femaleRoommates: 1,
    maleRoommates: 2,
    amenities: ['wifi'],
    imgs: ["https://firebasestorage.googleapis.com/v0/b/cornlet-prod.appspot.com/o/temp%2Fforest.jpg?alt=media&token=967fa2f7-3730-4ebf-9b05-aa3c4cafeb59"],
    desc: 'test description',
    active: true,
    sold: false,
    cornellOnly: false,
  }
  const dynInitValues = initialValues || tempValues || (process.env.NODE_ENV === 'development' && devValues) || defaultValues;

  // define form
  const formik = useFormik({
    initialValues: dynInitValues,
    validationSchema: Yup.object({
      addr: Yup.string()
        .required('Required'),
      toCampus: Yup.number()
        .required('Please select an address from the address options dropdown'),
      price: Yup.number()
        .required('Required'),
      start: Yup.object()
        .required('Required'),
      end: Yup.object()
        .required('Required'),
      type: Yup.string()
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
      cornellOnly: Yup.boolean()
        .required('Required'),
    }),
    onSubmit: (values) => {
      if (initialValues) {
        api.put(`/listing/${initialValues._id}/update`, values)
          .then(() => {
            history.push('/profile');
          })
          .catch((e) => log('ERROR ListingForm update', e));
      } else {
        if (user) {
          api.post('/listing/create', { ...values, user })
            .then(() => {
              history.push('/profile/listings');
            })
            .catch((e) => {
              log('ERROR new listing submit form', e);
            });
        }
        else {
          signIn();
          dispatch({
            type: 'AUTHING_SET',
            payload: true,
          })
          dispatch({
            type: 'TEMP_VALUES_SET',
            payload: values,
          })
        }
      }
    },
  });

  if (tempValues) {
    if (!authing) {
      if (user) {
        console.log('auto create new listing')
        api.post('/listing/create', { ...tempValues, user })
          .then(() => {
            dispatch({
              type: 'TEMP_VALUES_SET',
              payload: null,
            })
            router.history.push('/profile/listings');
          })
          .catch((e) => {
            log('ERROR new listing submit form', e);
          });
      }
      else {
        console.log('user failed signin, return to /new');
        dispatch({
          type: 'TEMP_VALUES_SET',
          payload: null,
        })
      }
    }
    return <div>processing signin</div>
  }

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
