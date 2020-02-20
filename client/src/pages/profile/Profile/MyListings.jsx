import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from 'src/util/api'
import log from 'src/util/log'
import ListingCard from 'src/components/cards/ListingCard';
import DynCardList from 'src/components/views/DynCardList';

const Container = styled.div`
  margin: 2rem 0;
`

const CardContainer = styled.div`
  margin: 1rem 0;
`;

const MyListings = ({ uid, setHasListings }) => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    if (uid) {
      api.get(`/listing?uid=${uid}`)
        .then((res) => setListings(res.data))
        .catch((e) => log(`ERROR get mylistings`, e))
    }
  }, [])
  useEffect(() => {
    if (listings.length > 0) setHasListings(true);
  }, [listings])
  
  return (
    <Container>
      <DynCardList>
        {listings.map((listing) => (
          <CardContainer>
            <ListingCard
              listing={listing}
              edit
            />
          </CardContainer>
        ))
          
        }
      </DynCardList>
    </Container>
  )
};

export default MyListings;
