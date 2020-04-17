import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListingCard from 'src/components/cards/ListingCard';
import api from 'src/util/api';
import log from 'src/util/log';
import DynCardList from 'src/containers/DynCardList';
import useRouter from 'src/util/hooks/useRouter';

const CardContainer = styled.div`
  margin: 1rem 0;
`;

const Listings = () => {
  const router = useRouter();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const connector = router.location.search ? '&' : '?';
    api.get(`/listing${router.location.search}${connector}active=true`)
      .then((res) => setListings(res.data))
      .catch((e) => {
        log('ERROR get listings at home', e);
      });
  }, [router]);

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
