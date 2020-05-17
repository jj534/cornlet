import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import DateFilter from 'src/components/filters/DateFilter';
import SliderFilter from 'src/components/filters/SliderFilter';

const Container = styled.div`
  width: 350px;
  min-height: 160px;
  padding: 0 1rem;
`;

const Name = styled(Body)`
  margin: 1rem 0;
`

const Row = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: .5rem;
  }
`

const FilterContents = () => {
  return (
    <Container>
      <Name>Date</Name>
      <Row>
        <DateFilter
          name='start'
          placeholder='Start'
        />
        <Body>to</Body>
        <DateFilter
          name='end'
          placeholder='End'
        />
      </Row>
      <Name>Price</Name>
      <SliderFilter
        startName='minPrice'
        endName='maxPrice'
      />
    </Container>
  )
};

export default FilterContents;
