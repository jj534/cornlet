import React from 'react';
import styled from 'styled-components';
import Body from 'src/components/fonts/Body';
import listingDatestring from 'src/util/helpers/listingDatestring';
import log from 'src/util/log';
import api from 'src/util/api';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
`;

const Img = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
`;

const Data = styled.div`
  width: 70%;
  height: 100%;
  padding: .2rem .5rem;

  display: flex
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  // justify='end'
  justify-content: ${(props) => (props.justify === 'end' ? 'flex-end' : '')};
`;

const Addr = styled(Body)`
  white-space: nowrap;
  flex-grow: 0;
  width: 90%;
`;

const DeleteBtn = styled(Body)`
  cursor: pointer;
`;

const Price = styled(Body)`
  color: ${(props) => props.theme.primary};

`;

const BmListing = ({ listing }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleRemove = async (e) => {
    try {
      e.preventDefault();

      if (!user) {
        dispatch({
          type: 'BM_REMOVE',
          payload: listing,
        });
      }
      else {
        dispatch({
          type: 'USER_BM_REMOVE',
          payload: listing,
        })

        await api.put(`/user/${user._id}/bm/remove/${listing._id}`)
          .catch(({ response }) => log('BmListing', response))
      }
    }
    catch (error) {
      log('BmListing', error);
    }
  };

  return (
    <Link to={`/listing/${listing._id}`}>
      <Container>
        <Img src={listing.imgs[0]} />
        <Data>
          <div>
            <Row>
              <Addr ellipsis>{listing.addr}</Addr>
              <DeleteBtn onClick={handleRemove}>x</DeleteBtn>
            </Row>
            <Row>
              <Body muted sm>{listingDatestring(listing)}</Body>
            </Row>
          </div>
          <Row justify="end">
            <Price>
$
              {listing.price}
            </Price>
          </Row>
        </Data>
      </Container>
    </Link>
  );
};

export default BmListing;
