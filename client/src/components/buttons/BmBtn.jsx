import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import api from 'src/util/api';
import log from 'src/util/log';
import { ReactComponent as BmFilledRaw } from 'src/assets/svgs/bookmark.svg';

const Container = styled.div`
  background: white;
  padding: .5rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const BmFilled = styled(BmFilledRaw)`
  display: block;
  fill: white;
  height: 1rem;
  width: 1rem;
  stroke: black;
  stroke-width: 2;
  overflow: visible !important;
  opacity: .9;

  // highlighted
  fill: ${(props) => (props.highlighted ? props.theme.primary : '')};
  // stroke-width: ${(props) => (props.highlighted ? '0' : '')};
`;

const BmBtn = ({ listing }) => {
  const bm = useSelector((state) => state.bm);
  const user = useSelector((state) => state.user);
  let isBmed = false;
  if (bm.listings) {
    const listingsToCheck = user ? user.bm.listings : bm.listings
    isBmed = listingsToCheck.filter((bmedListing) => bmedListing._id === listing._id).length !== 0;
  }
  const dispatch = useDispatch();
  const toggleBm = async () => {
    try {
      const addListingToBm = !isBmed;
      // redux
      const type = addListingToBm ? 'BM_ADD' : 'BM_REMOVE';

      if (!user) {
        // redux: bm
        dispatch({
          type,
          payload: listing,
        });
      }
      else {
        // redux: user.bm
        dispatch({
          type: `USER_${type}`,
          payload: listing,
        })

        // DB
        if (addListingToBm) {
          await api.put(`/user/${user.uid}/bm/add/${listing._id}`);
        }
        else {
          await api.put(`/user/${user.uid}/bm/remove/${listing._id}`);
        }
      }
    }
    catch (e) {
      log('ListingCard', e);
    }
  };

  return (
    <Container onClick={toggleBm}>
      <BmFilled highlighted={isBmed ? 1 : 0} />
    </Container>
  );
};

export default BmBtn;
