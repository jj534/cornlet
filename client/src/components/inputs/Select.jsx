import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div`
  min-width: 100px;

  // width
  min-width: ${props => props.width ? `${props.width}px` : ''};
`;

const useStyles = makeStyles(() => ({
  textField: {
    'width': '100%',
    'text-align': 'center',
  },
}));

const Select = ({
  formik, name, opts, label, width, ...rest
}) => {
  const hasError = formik ? formik.touched[name] && formik.errors[name] : false;
  const error = hasError ? formik.errors[name] : undefined;
  const formikProps = formik ? formik.getFieldProps(name) : [];
  const classes = useStyles();

  return (
    <Container width={width}>
      <TextField
        select
        {...rest}
        {...formikProps}
        label={label}
        error={error}
        helperText={error}
        margin="none"
        className={classes.textField}
      >
        {opts.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Container>
  );
};

export default Select;
