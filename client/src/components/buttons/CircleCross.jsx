import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 50%;
  opacity: .7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: rgba(0, 0, 0, .2);
  cursor: pointer;
`;

const CircleCross = (props) => {
  return (
    <Container {...props}>
      x
    </Container>
  )
};

export default CircleCross;
