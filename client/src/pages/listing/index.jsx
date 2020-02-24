import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Listing from './Listing';
import api from 'src/util/api';
import log from 'src/util/log';

const Container = styled.div`

`;

const ListingIndex = ({ match }) => {
  const { id } = match.params;
  const [listing, setListing] = useState();
  useEffect(() => {
    if (id) {
      api.get(`/listing/${id}`)
        .then((res) => setListing(res.data))
        .catch((e) => log(`ERROR get listing at listing details page`, e))
    }
  }, [id])
  
  if (!listing) return <div />;
  
  return (
    <Container>
      <Listing 
        listing={listing}
      />
    </Container>
  )
};

export default ListingIndex;
