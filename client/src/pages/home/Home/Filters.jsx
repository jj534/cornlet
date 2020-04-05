import React from 'react';
import styled from 'styled-components';
import DateFilter from 'src/components/filters/DateFilter';

const Container = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
  
  & > div, p {
    margin-right: .8rem;
  }
`;


const Filters = () => (
  <Container>
    <DateFilter
      name="start"
      placeholder="Start"
    />
    <DateFilter
      name="end"
      placeholder="End"
    />
  </Container>
);

export default Filters;
