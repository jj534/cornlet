import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 16px;
  
  & > * {
    flex-grow: 2;
  }
`;

const FormikInput = ({ formik, name, label, adornment, multiline, ...rest}) => {
  const error = formik.errors[name];
  const formikProps = formik ? formik.getFieldProps(name) : [];
  const wrappedAdornment = adornment 
    ? <InputAdornment position="start">{adornment}</InputAdornment>
    : null;
  const multilineProps = {
    multiline: multiline,
    variant: 'outlined',
    rows: 4
  }
  const conditionalMultiline = multiline ? multilineProps : {};
  
  return (
    <Container>
        <TextField 
          {...rest}
          {...formikProps}
          label={label} 
          error={error ? true : false}
          helperText={error}
          fullwidth
          margin='normal'
          InputProps={{ startAdornment: wrappedAdornment, }}
          {...conditionalMultiline}
        />
    </Container>
  );
};

export default FormikInput;
