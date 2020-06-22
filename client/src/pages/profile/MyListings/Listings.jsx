import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from 'src/util/api';
import log from 'src/util/log';
import ListingCard from 'src/components/cards/ListingCard';
import DynCardList from 'src/containers/DynCardList';
import PaginationBtns from 'src/components/buttons/PaginationBtns';

const Container = styled.div`
  margin: 2rem 0;
`;

const MyListings = ({ uid, setHasListings }) => {
  const [listings, setListings] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const reload = () => {
    api.get(`/listing?uid=${uid}`)
      .then((res) => {
        setListings(res.data.docs);
        setTotalPages(res.data.totalPages);
        setPage(res.data.page);
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
      <PaginationBtns
        totalPages={totalPages}
        page={page}
      />
    </Container>
  );
};

export default MyListings;
