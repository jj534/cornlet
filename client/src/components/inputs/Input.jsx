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

const FormikInput = ({
  formik, name, label, adornment, multiline, ...rest
}) => {
  const hasError = formik ? formik.touched[name] && formik.errors[name] : false;
  const error = hasError ? formik.errors[name] : undefined;
  const formikProps = formik ? formik.getFieldProps(name) : [];
  const wrappedAdornment = adornment
    ? <InputAdornment position="start">{adornment}</InputAdornment>
    : null;
  const multilineProps = {
    multiline,
    variant: 'outlined',
    rows: 8,
  };
  const conditionalMultiline = multiline ? multilineProps : {};

  return (
    <Container>
      <TextField
        {...rest}
        {...formikProps}
        label={label}
        error={!!error}
        helperText={error}
        fullwidth={1}
        margin="normal"
        InputProps={{ startAdornment: wrappedAdornment }}
        {...conditionalMultiline}
      />
    </Container>
  );
};

export default FormikInput;
