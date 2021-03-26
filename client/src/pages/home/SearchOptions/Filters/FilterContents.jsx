import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import DateFilter from 'src/components/filters/DateFilter';
import SliderFilter from 'src/components/filters/SliderFilter';
import ClearFilters from './ClearFilters';

const Container = styled.div`
  width: 300px;
  padding: .5rem 1rem;

  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const Name = styled(Body)`
  margin: 1rem 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: .5rem;
  }
`;

const FilterContents = () => (
  <Container>
    <ClearFilters />
    <Name>Date</Name>
    <Row>
      <DateFilter
        name="start"
        placeholder="Start"
      />
      <Body>to</Body>
      <DateFilter
        name="end"
        placeholder="End"
      />
    </Row>
    <Name>Price</Name>
    <SliderFilter
      startName="minPrice"
      endName="maxPrice"
      max={2000}
      step={50}
    />
    <Name>Distance to Campus (km)</Name>
    <SliderFilter
      startName="minToCampus"
      endName="maxToCampus"
      max={5}
      step={0.2}
    />
  </Container>
);

export default FilterContents;
