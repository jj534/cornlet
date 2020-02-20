import React from 'react';
import styled from 'styled-components';
import ErrMsg from './ErrMsg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: .5rem;
`;

const InputArea = styled.div`
  display: flex;
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border: ${(props) => (props.hasError ? 'solid 1px #de6362' : 'none')};
`;

const ButtonContainer = styled.div`
  margin-left: 1rem;
`;

const ErrorMsg = styled(ErrMsg)`
  margin-top: .5rem;
`;

const LinedTextarea = (props) => {
  const {
    formik, name, label, sideButton, rows, cols
  } = props;
  const hasError = formik && formik.touched[name] && formik.errors[name];
  const formikProps = formik ? formik.getFieldProps(name) : []
  
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputArea>
        <Textarea
          type="text"
          {...props}
          {...formikProps}
          hasError={hasError}
          rows={rows}
          cols={cols}
        />
        {sideButton && (
          <ButtonContainer>
            {sideButton}
          </ButtonContainer>
        )}
      </InputArea>
      {hasError
        ? <ErrorMsg>{formik && formik.errors[name]}</ErrorMsg>
        : null}
    </Container>
  );
};

export default LinedTextarea;
