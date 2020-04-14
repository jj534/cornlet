import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';

const Container = styled.div`

`;

const MyBookmarks = () => {
  return (
    <Container>
      <MainHeader />
      <Navbar />
        MyBookmarks
    </Container>
  )
};

export default MyBookmarks;
