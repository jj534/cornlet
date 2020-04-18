import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.h2`
  opacity: 1;
  font-size: 1rem;
  white-space: pre-line;
  line-height: 1.2;
  
  // muted
  opacity: ${(props) => (props.muted ? '.8' : '')};
  
  // sm
  font-size: ${(props) => (props.sm ? '.8rem' : '')};
  
  // color
  color: ${(props) => (props.color ? props.theme[props.color] : '')};
`;

const Body = (props) => (
  <StyledBody {...props}>
    {props.children}
  </StyledBody>
);

export default Body;
