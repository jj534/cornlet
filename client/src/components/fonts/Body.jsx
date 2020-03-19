import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.h2`
  opacity: .8;
  font-size: 1rem;
  white-space: pre-line;
`;

const Body = (props) => (
  <StyledBody>
    {props.children}
  </StyledBody>
);

export default Body;
