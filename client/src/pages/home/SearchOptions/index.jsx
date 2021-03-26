import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import Filters from './Filters';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  & > div {
    margin: 0 !important;
  }

  @media (min-width: ${props => props.theme.md}px) {

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
