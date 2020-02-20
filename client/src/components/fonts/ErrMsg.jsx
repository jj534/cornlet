import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: .7rem;
  color: ${props => props.theme.danger};
  margin-top: .5rem;
`;

const ErrMsg = (props) => (
  <Container {...props}>
    {props.children}
  </Container>
);

export default ErrMsg;
