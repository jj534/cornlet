import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from 'src/components/displays/Badge';
import Body from 'src/components/fonts/Body';
import getDateString from 'src/util/helpers/getDateString';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux';

import api from 'src/util/api';
import log from 'src/util/log';

import { ReactComponent as PenRaw } from 'src/assets/svgs/pen.svg';
import { ReactComponent as BinRaw } from 'src/assets/svgs/bin.svg';
import { ReactComponent as BmFilledRaw } from 'src/assets/svgs/bookmark-filled.svg';

const Container = styled.div`
  width: 90vw;
  padding: 1rem .5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: ${props => props.theme.md}px) {
    width: 25%;
  }
`;

const BmContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 2;
  cursor: pointer;
`

const BmFilled = styled(BmFilledRaw)`
  display: block;
  fill: rgba(0, 0, 0, 0.5);
  height: 20px;
  width: 20px;
  stroke: #FFFFFF;
  stroke-width: 2;
  overflow: visible !important;

  // highlighted
  fill: ${props => props.highlighted ? props.theme.primary : ''};
  opacity: ${props => props.highlighted ? '.9' : ''};
`

const TextArea = styled.div`
  padding: 0 .2rem;
  width: 100%;
`;

const Addr = styled(Body)`
  white-space: nowrap;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: .5rem;
`;

const ImgContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  // faded
  opacity: ${(props) => (props.faded ? '.5' : '')};
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .6rem 0 .4rem 0;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  color: ${(props) => props.theme.primary};
`;

const EditTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;;
  margin-top: .5rem;
  padding: 0 .2rem;
`;

const RightSection = styled.div`
  display: flex;
  
  & > * {
    margin-left: .5rem;
  }
`;

const Pen = styled(PenRaw)`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  opacity: .7;
  
  &:hover {
    opacity: 1;
  }
`;

const Bin = styled(BinRaw)`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  opacity: .7;
  
  &:hover {
    opacity: 1;
  }
`;

const ListingCard = ({ listing, edit, reload }) => {
  const {
    _id, addr, price, imgs, sold, active,
  } = listing;
  const editPath = edit ? `/listing/${_id}/edit` : `/listing/${_id}`;
  const listingPath = `/listing/${_id}`;

  // active toggling
  const [activeLocal, setActiveLocal] = useState(true);

  useEffect(() => {
    setActiveLocal(active);
  }, [active]);

  const handleChange = () => {
    setActiveLocal(!activeLocal);
    api.put(`/listing/${_id}/update`, { active: !activeLocal })
      .catch((e) => log('ERROR ListingCard', e));
  };

  // handle delete
  const handleDelete = () => {
    api.put(`/listing/${_id}/update`, { active: false, deleted: true })
      .then(() => reload())
      .catch((e) => log('ERROR ListingCard', e));
  };

  // bm
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
        await api.put(`/user/${user.uid}/bm/add/${_id}`)
      }
      else {
        await api.put(`/user/${user.uid}/bm/remove/${_id}`)
      }
    }
    catch (e) {
      log('ListingCard', e)
    }
  }

  return (
    <Container> 
      <BmContainer onClick={toggleBm}>
        <BmFilled highlighted={isBmed ? 1 : 0} />
      </BmContainer>
      <Link to={listingPath}>
        <ImgContainer>
          <Img
            src={imgs[0]}
            faded={sold}
          />
        </ImgContainer>
        <TextArea>
          <TopRow>
            {sold
              ? <Badge color="primary" size="sm" inverted>Sold</Badge>
              : <Body muted sm>{getDateString(listing)}</Body>}
            <Price>{`$${price}`}</Price>
          </TopRow>
          <Addr>{addr}</Addr>
        </TextArea>
      </Link>
      {edit && (
        <EditTools>
          <FormControlLabel
            control={(
              <Switch
                checked={activeLocal}
                onChange={handleChange}
                color="primary"
                size="small"
              />
            )}
            label={activeLocal ? 'Active' : 'Inactive'}
          />
          <RightSection>
            <Link to={editPath}>
              <Pen />
            </Link>
            <Bin onClick={handleDelete} />
          </RightSection>
        </EditTools>
      )}
    </Container>
  );
};

export default ListingCard;
