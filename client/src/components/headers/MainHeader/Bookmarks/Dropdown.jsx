import React, { useRef } from 'react';
import styled from 'styled-components';
import useOnOutsideClick from 'src/util/hooks/useOnOutsideClick';
import ListingRowElt from 'src/components/cards/ListingRowElt';

const Container = styled.div`
  position: absolute;
  top: 40px;
  
  border-radius: 5px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

  white-space: nowrap;
  
  max-height: 300px;
  overflow: auto;
  padding: .5rem 0;
  padding: ${props => props.noBm ? '.5rem' : ''};
`;

const Dropdown = ({ listings, setDropdown }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  }
  const DropdownRef = useRef();
  const closeDropdown = () => {
    setDropdown(false);
  }
  useOnOutsideClick(DropdownRef, closeDropdown);

  if (!listings || !listings.length) {
    return (
      <Container ref={DropdownRef} onClick={handleClick} noBm>
        No bookmarks
      </Container>
    )
  }

  return (
    <Container ref={DropdownRef} onClick={handleClick}>
      {listings.map((listing) => (
        <ListingRowElt key={listing._id} listing={listing} />
      ))}
    </Container>
  )
};

export default Dropdown;
