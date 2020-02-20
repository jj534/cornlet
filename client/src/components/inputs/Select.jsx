import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.div`

`

const useStyles = makeStyles(theme => ({
  textField: {
    'min-width': 150,
  },
}));

const Select = ({
  formik, name, opts, label, ...rest
}) => {
  const error = formik.errors[name];
  const formikProps = formik ? formik.getFieldProps(name) : [];
  const classes = useStyles();

  return (
    <Container>
      <TextField
        select
        {...rest}
        {...formikProps}
        label={label} 
        error={error}
        helperText={error}
        margin='normal'
        className={classes.textField}
        >
          {opts.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Container>
  );
};

export default Select;
