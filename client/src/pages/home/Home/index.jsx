import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Listings from './Listings';
import Filters from './Filters';

const Container = styled.div`
  width: 100%;
`;

const HomeUI = () => (
  <Container>
    <MainHeader />
    <Filters />
    <Listings />
  </Container>
);

export default HomeUI;
