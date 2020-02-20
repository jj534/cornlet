import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Listings from './Listings';

const Container = styled.div`

`;

const HomeUI = () => {
  return (
    <Container>
      <MainHeader />
      <Listings />
    </Container>
  )
};

export default HomeUI;
