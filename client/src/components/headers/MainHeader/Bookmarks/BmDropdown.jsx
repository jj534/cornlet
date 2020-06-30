import React from 'react';
import styled from 'styled-components';
import Dropdown from 'src/components/views/Dropdown';
import BmListing from './BmListing';

const Container = styled.div`
  max-height: 350px;
  overflow: auto;

  @media (min-width: ${(props) => props.theme.md}px) {
    width: 400px;
  }
`;

const NoBm = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;

const BmDropdown = ({ listings, dropdown, setDropdown }) => {
  const listingComponents = listings && listings.map((listing) => (
    <BmListing key={listing._id} listing={listing} />
  ));
  const noBmText = <NoBm>No bookmarks!</NoBm>;

  return (
    <Dropdown show={dropdown} setShow={setDropdown} alignRight>
      <Container>
        {(!listings || !listings.length)
          ? noBmText
          : listingComponents}
      </Container>
    </Dropdown>
  );
};

export default BmDropdown;
