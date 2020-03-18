import React from 'react';
import styled from 'styled-components';
import DateFilter from 'src/components/filters/DateFilter';

const Container = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  
  & > div {
    margin-right: .8rem;
  }
`;


const Filters = () => (
  <Container>
    <DateFilter
      name="start"
      placeholder="Start"
    />
    <div>
      ~
    </div>
    <DateFilter
      name="end"
      placeholder="End"
    />
  </Container>
);

export default Filters;
