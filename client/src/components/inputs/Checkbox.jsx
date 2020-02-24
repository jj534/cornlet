import React from 'react';
import styled from 'styled-components';
import Label from 'src/components/fonts/Label';
import ErrMsg from 'src/components/fonts/ErrMsg';

const Wrapper = styled.div`

`

const InputArea = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin: 4px 0 0 .5rem;
`;

const Checkbox = ({ label, name, formik, ...rest }) => {
  const hasError = formik ? formik.touched[name] && formik.errors[name] : false;

  const handleChange = (e) => {
    if (e.target.checked) {
      formik.setFieldValue(name, true)
    } else {
      formik.setFieldValue(name, false);
    }
  }
  
  return (
    <Wrapper {...rest}>
      <InputArea>
        <input 
          type="checkbox" 
          checked={formik.values[name]}
          onChange={handleChange}
        />
        <CheckboxLabel>{label}</CheckboxLabel>
      </InputArea>
      {hasError? (
        <ErrMsg>{formik.errors[name]}</ErrMsg>
      ) : null}
    </Wrapper>
  );
};

export default Checkbox;
