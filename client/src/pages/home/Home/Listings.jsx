import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListingCard from 'src/components/cards/ListingCard';
import api from 'src/util/api';
import log from 'src/util/log';
import DynCardList from 'src/components/views/DynCardList';

const CardContainer = styled.div`
  margin: 1rem 0;
`;

const Listings = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    api.get('/listing?active=true')
      .then((res) => setListings(res.data))
      .catch((e) => {
        log('ERROR get listings at home', e);
      });
  }, []);

  return (
    <DynCardList>
      {listings.map((listing) => (
        <CardContainer key={listing._id}>
          <ListingCard
            listing={listing}
          />
        </CardContainer>
      ))}
    </DynCardList>
  );
};

export default Listings;
