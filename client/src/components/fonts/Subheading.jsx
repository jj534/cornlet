import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.h2`
  opacity: .8;
  font-size: 1rem;

  // bold
  font-weight: ${props => props.bold ? 'bold' : ''};
`;

const Subheading = ({ children, bold, ...rest }) => (
  <StyledBody bold={bold}>
    {children}
  </StyledBody>
);

export default Subheading;
