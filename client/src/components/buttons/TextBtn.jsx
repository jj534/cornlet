import React from 'react'
import styled from 'styled-components';

const StyledTextBtn = styled.button`
  font-weight: 500;
  color: ${props => props.theme.brand};
  background: inherit;

  // colorHex
  color: ${props => props.colorHex && props.colorHex};
`;

const TextBtn = ({ children, ...rest }) => {
  return (
    <StyledTextBtn 
      {...rest}
    >
      {children}
    </StyledTextBtn>
  )
}

export default TextBtn
