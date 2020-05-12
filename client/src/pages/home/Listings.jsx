import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListingCard from 'src/components/cards/ListingCard';
import api from 'src/util/api';
import log from 'src/util/log';
import DynCardList from 'src/containers/DynCardList';
import useRouter from 'src/util/hooks/useRouter';
import { useSelector } from 'react-redux';

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
        <ListingCard
          key={listing._id}
          listing={listing}
        />
      ))}
    </DynCardList>
  );
};

export default Listings;
