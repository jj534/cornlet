import React from 'react';
import styled from 'styled-components';
import DateFilter from 'src/components/filters/DateFilter';
import Sort from 'src/components/filters/Sort';
import ClearFilters from 'src/components/filters/ClearFilters';

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
    <Sort />
    <ClearFilters />
  </Container>
);

export default Filters;
