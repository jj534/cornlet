import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import Filters from './Filters';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > div:first-child {
    margin: 2rem 0 4rem 0;
  }

  @media (min-width: ${props => props.theme.md}px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin: 2rem 0 2rem 0;

    & > div:first-child {
      margin: 0;
    }
  }
`;

const SearchOptions = () => {
  return (
    <Container>
      <Filters />
      <SortBy />
    </Container>
  )
};

export default SearchOptions;
