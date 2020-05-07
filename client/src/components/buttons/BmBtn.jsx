import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import api from 'src/util/api';
import log from 'src/util/log';
import { ReactComponent as BmFilledRaw } from 'src/assets/svgs/bookmark-filled.svg';

const Container = styled.div`

`;

const BmFilled = styled(BmFilledRaw)`
  display: block;
  fill: rgba(0, 0, 0, 0.5);
  height: 20px;
  width: 20px;
  stroke: #FFFFFF;
  stroke-width: 2;
  overflow: visible !important;
  cursor: pointer;

  // highlighted
  fill: ${props => props.highlighted ? props.theme.primary : ''};
  opacity: ${props => props.highlighted ? '.9' : ''};
`

const BmBtn = ({ listing }) => {
  const bm = useSelector((state) => state.bm);
  const user = useSelector((state) => state.user);
  let isBmed = false;
  if (bm.listings) {
    isBmed = bm.listings.filter((bmedListing) => bmedListing._id === listing._id).length !== 0;
  }
  const dispatch = useDispatch();
  const toggleBm = async () => {
    try {
      const newState = !isBmed;
      // redux
      const type = newState ? 'BM_ADD' : 'BM_REMOVE';
      dispatch({
        type,
        payload: listing
      })
      if (!user) return;
      
      // DB
      if (newState) {
        await api.put(`/user/${user.uid}/bm/add/${listing._id}`)
      }
      else {
        await api.put(`/user/${user.uid}/bm/remove/${listing._id}`)
      }
    }
    catch (e) {
      log('ListingCard', e)
    }
  }

  return (
    <Container>
      <BmFilled onClick={toggleBm} highlighted={isBmed ? 1 : 0} />
    </Container>
  )
};

export default BmBtn;
