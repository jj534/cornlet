import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  width: 350px;
  padding: 1rem;
`;

const FilterContents = () => {
  return (
    <Container>
      <Body>Sort</Body>
    </Container>
  )
};

export default FilterContents;
