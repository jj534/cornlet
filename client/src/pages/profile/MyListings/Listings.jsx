import React, { useEffect, useState } from 'react';
import PaginationBtns from 'src/components/buttons/PaginationBtns';
import ListingCard from 'src/components/cards/ListingCard';
import LoadingDots from 'src/components/displays/LoadingDots';
import DynCardList from 'src/containers/DynCardList';
import api from 'src/util/api';
import log from 'src/util/log';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
`;

export const NewCardContainer = styled.div`
  width: 90vw;
  padding: 1rem .5rem;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.md}px) {
    width: 33%;
  }
`;

export const NewCardFrame = styled.div`
  width: 100%;
  padding-bottom: 70%;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  position: relative;
  cursor: pointer;

  @media (min-width: ${props => props.theme.md}px) {
    transition: box-shadow .2s ease-in-out;
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, .6);
    }
  }
`;

const MyListings = ({ uid, setHasListings }) => {
  const [listings, setListings] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const reload = () => {
    setLoading(true);
    api.get(`/listing?uid=${uid}`)
      .then((res) => {
        setListings(res.data.docs);
        setTotalPages(res.data.totalPages);
        setPage(res.data.page);
        setLoading(false);
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
      {loading && <LoadingDots />}
      <DynCardList>
        {listings.map((listing) => (
          <ListingCard
            key={listing._id}
            listing={listing}
            edit
            reload={reload}
          />
        ))}

        {/* new listing card */}
        {/* {!loading && (
          <NewCardContainer>
            <Link to='/new'>
              <NewCardFrame>
                <Plus>+</Plus>
              </NewCardFrame>
            </Link>
          </NewCardContainer>
        )} */}
      </DynCardList>
      {listings.length > 0 && (
        <PaginationBtns
          totalPages={totalPages}
          page={page}
        />
      )}
    </Container>
  );
};

export default MyListings;
