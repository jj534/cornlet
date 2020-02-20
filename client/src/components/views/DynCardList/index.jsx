import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const DynCardList = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
};

export default DynCardList;
