import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from 'src/components/displays/Badge';
import theme from 'src/theme';
import Body from 'src/components/fonts/Body';
import { formatDate } from 'src/util/helpers/date';
import { ReactComponent as PenRaw } from 'src/assets/svgs/pen.svg';
import { ReactComponent as BinRaw } from 'src/assets/svgs/bin.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import api from 'src/util/api';
import log from 'src/util/log';

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-right: .7rem;
  }
`;

const TextArea = styled.div`
  padding: 0 .2rem;
  width: ${theme.CARD_WIDTH}px;
`;

const Addr = styled(Body)`
  white-space: nowrap;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: .5rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: ${theme.CARD_WIDTH}px;
  height: 300px;
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
`

const RightSection = styled.div`
  display: flex;
  
  & > * {
    margin-left: .5rem;
  }
`

const Pen = styled(PenRaw)`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  opacity: .7;
  
  &:hover {
    opacity: 1;
  }
`

const Bin = styled(BinRaw)`
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  opacity: .7;
  
  &:hover {
    opacity: 1;
  }
`

const ListingCardUI = ({ listing, edit, reload }) => {
  const {
    _id, addr, price, imgs, sold, start, end, active
  } = listing;
  const editPath = edit ? `/listing/${_id}/edit` : `/listing/${_id}`;
  const listingPath = `/listing/${_id}`;
  const dateString = `${formatDate(start)} ~ ${formatDate(end)}`;
  
  // active toggling
  const [activeLocal, setActiveLocal] = useState(true);
  
  useEffect(() => {
    setActiveLocal(active)
  }, [active])
  
  const handleChange = () => {
    setActiveLocal(!activeLocal);
    api.put(`/listing/${_id}/update`, { active: !activeLocal})
      .catch((e) => log('ERROR ListingCardUI', e))
  }
  
  // handle delete
  const handleDelete = () => {
    api.put(`/listing/${_id}/update`, { active: false, deleted: true })
      .then(() => reload())
      .catch((e) => log('ERROR ListingCardUI', e))
  }
  
  return (
    <Container>
      <Link to={listingPath}>
        <Img
          src={imgs[0]}
          faded={sold}
        />
        <TextArea>
          <TopRow>
            {sold
              ? <Badge color='primary' size='sm' inverted>Sold</Badge>
              : <Body muted sm>{dateString}</Body>
            }
            <Price>{`$${price}`}</Price>
          </TopRow>
          <Addr>{addr}</Addr>
        </TextArea>
      </Link>
      {edit && (
        <EditTools>
          <FormControlLabel
            control={
              <Switch
                checked={activeLocal}
                onChange={handleChange}
                color="primary"
                size="small"
              />
            }
            label={activeLocal ? 'Active' : 'Inactive'}
          />
          <RightSection>
            <Link to={editPath}>
              <Pen />
            </Link>
            <Bin onClick={handleDelete}/>
          </RightSection>
        </EditTools>
      )}
    </Container>
  );
};

export default ListingCardUI;
