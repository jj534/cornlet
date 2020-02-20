import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 90%;
`;

const DynContainer = ({ children, ...rest}) => {
  return (
    <Wrapper>
      <Container {...rest}>
        {children}
      </Container>
    </Wrapper>
  )
};

export default DynContainer;
