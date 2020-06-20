import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import Filters from './Filters';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
  position: relative;

  & > div {
    margin-bottom: 1rem;
  }

  @media (min-width: ${props => props.theme.md}px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SearchOptions = () => {
  return (
    <Container>
      <SortBy />
      <Filters />
    </Container>
  )
};

export default SearchOptions;
