import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as FilterRaw } from 'src/assets/svgs/filter.svg';
import Dropdown from 'src/components/views/Dropdown';
import FilterContents from './FilterContents';
import FilterStatus from './FilterStatus';

const Container = styled.div`
  margin: 2rem 0 4rem 0;
  position: relative;
`;

export const Row = styled.div`
  padding: .2rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterBtn = styled.button`
  background: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .1);
  border-radius: 4px;
  padding: .5rem 1rem;

  display: flex;
  align-items: center;
`;

const FilterSVG = styled(FilterRaw)`
  height: 16px;
  width: 16px;
  margin-right: .5rem;
`;

const Filters = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  return (
    <Container>
      <Row>
        <FilterBtn type="button" onClick={handleClick}>
          <FilterSVG />
          {' '}
  Filters
        </FilterBtn>
        <FilterStatus />
      </Row>
      <Dropdown
        show={show}
        setShow={setShow}
        alignLeft
      >
        <FilterContents />
      </Dropdown>
    </Container>
  );
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
