import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import DynCardList from 'src/containers/DynCardList';
import { useSelector } from 'react-redux';
import api from 'src/util/api';
import log from 'src/util/log';

const Container = styled.div`

`;

const MyChats = () => {
  const [listings, setListings] = useState([]);
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if (!user) return;
    
    api.get()
  }, [user])
  
  if (!user) return <div />;
  
  return (
    <Container>
      <MainHeader />
      <Navbar />
        <DynCardList>
        MyChats
        </DynCardList>
    </Container>
  )
};

export default MyChats;
