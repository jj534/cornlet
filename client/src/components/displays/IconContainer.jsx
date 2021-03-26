import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 50%;
  cursor: pointer;
  padding: .2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, .05);
  }
`;

const IconContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default IconContainer
