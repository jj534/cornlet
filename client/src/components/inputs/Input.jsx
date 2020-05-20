import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 16px;

  & textarea {
    line-height: 1.5;
  }
  
  & > * {
    flex-grow: 2;
  }

  // width
  width: ${props => props.width ? `${props.width}px` : ''};
`;

const FormikInput = ({
  formik, name, label, adornment, multiline, width, margin, ...rest
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
    rows: 20,
  };
  const conditionalMultiline = multiline ? multilineProps : {};

  return (
    <Container width={width}>
      <TextField
        {...formikProps}
        label={label}
        error={!!error}
        helperText={error}
        fullwidth={1}
        margin={margin || 'normal'}
        InputProps={{ startAdornment: wrappedAdornment, style: { textAlign: 'center' } }}
        {...conditionalMultiline}
        {...rest}
      />
    </Container>
  );
};

export default FormikInput;
