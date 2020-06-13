import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from 'src/util/api';
import log from 'src/util/log';
import ListingCard from 'src/components/cards/ListingCard';
import DynCardList from 'src/containers/DynCardList';

const Container = styled.div`
  margin: 2rem 0;
`;

const MyListings = ({ uid, setHasListings }) => {
  const [listings, setListings] = useState([]);

  const reload = () => {
    api.get(`/listing?uid=${uid}`)
      .then((res) => {
        setListings(res.data);
      })
      .catch((e) => log('ERROR get mylistings', e));
  };

  useEffect(() => {
    if (uid) {
      reload();
    }
  }, [uid]);

  useEffect(() => {
    if (listings.length > 0) setHasListings(true);
    else setHasListings(false);
  }, [listings, setHasListings]);

  return (
    <Container>
      <DynCardList>
        {listings.map((listing) => (
          <ListingCard
            listing={listing}
            edit
            reload={reload}
          />
        ))}
      </DynCardList>
    </Container>
  );
};

export default MyListings;
