import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FilterRaw } from 'src/assets/svgs/filter.svg';
import Dropdown from 'src/components/views/Dropdown';
import FilterContents from './FilterContents';

const Container = styled.div`
  margin: 2rem 0 4rem 0;
  position: relative;
`;

const FilterBtn = styled.button`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: .5rem 1rem;

  display: flex;
  align-items: center;
`

const FilterSVG = styled(FilterRaw)`
  height: 16px;
  width: 16px;
  margin-right: .5rem;
`

const Filters = () => {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <FilterBtn type='button' onClick={() => setShow(true)}>
        <FilterSVG /> Filters
      </FilterBtn>
      <Dropdown
        show={show}
        setShow={setShow}
        alignLeft
      > 
        <FilterContents />
      </Dropdown>
    </Container>
  )
};


/*
const Container = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
  
  & > div, p {
    margin-right: .8rem;
  }
`;

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
*/

export default Filters;
