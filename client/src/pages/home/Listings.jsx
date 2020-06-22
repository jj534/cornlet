import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListingCard from 'src/components/cards/ListingCard';
import api from 'src/util/api';
import log from 'src/util/log';
import DynCardList from 'src/containers/DynCardList';
import useRouter from 'src/util/hooks/useRouter';
import LoadingDots from 'src/components/displays/LoadingDots';
import PaginationBtns from 'src/components/buttons/PaginationBtns';

export const Container = styled.div`

`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Listings = () => {
  const router = useRouter();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const connector = router.location.search ? '&' : '?';
    api.get(`/listing${router.location.search}${connector}active=true`)
      .then((res) => {
        setListings(res.data.docs);
        setTotalPages(res.data.totalPages);
        setPage(res.data.page);
        setLoading(false);
      })
      .catch(({ response }) => {
        log('ERROR get listings at home', { response });
        setLoading(false);
      });
  }, [router]);

  if (loading) return <Center><LoadingDots /></Center>;

  return (
    <Container>
      <DynCardList>
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
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

export default Listings;
