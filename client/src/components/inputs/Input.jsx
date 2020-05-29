import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import theme from 'src/theme';

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: theme.primary,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.primary,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.primary,
      },
    },
  },
})(TextField);

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

const Input = ({
  formik, name, label, adornment, multiline, width, margin, rows, ...rest
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
    rows: rows || 20,
  };
  const conditionalMultiline = multiline ? multilineProps : {};

  return (
    <Container width={width}>
      <StyledTextField
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

export default Input;
