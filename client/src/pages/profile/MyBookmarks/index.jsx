import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MyBookmarks = () => (
  <div>
    <MainHeader />
    <Navbar />
    <Container>
        Coming Soon!
    </Container>
  </div>
);

export default MyBookmarks;
