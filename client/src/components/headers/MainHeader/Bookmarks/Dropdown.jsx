import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnOutsideClick from 'src/util/hooks/useOnOutsideClick';
import BmListing from './BmListing';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import theme from 'src/theme';
import useWindowSize from 'src/util/hooks/useWindowSize';

const Container = styled.div`
  position: fixed;
  top: 120px;
  left: 10px;
  right: 10px;
  z-index: 5;
  max-height: 350px;
  overflow: auto;
  padding: ${props => props.noBm ? '.5rem' : ''};

  @media (min-width: ${props => props.theme.md}px) {
    position: absolute;
    top: 50px;
    left: -200px;
    width: 400px;
  }
  
  border-radius: 2px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border: 1px solid rgba(0, 0, 0, .05);

  white-space: nowrap;
`;

const Dropdown = ({ listings, dropdown, setDropdown }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  }
  const DropdownRef = useRef();
  const closeDropdown = () => {
    setDropdown(false);
    clearAllBodyScrollLocks();
  }
  useOnOutsideClick(DropdownRef, closeDropdown);

  // disable scroll on mobile
  const [scWidth, height] = useWindowSize();
  useEffect(() => {
    if (dropdown && scWidth < theme.md) disableBodyScroll(DropdownRef);
  }, [dropdown])

  if (!listings || !listings.length) {
    return (
      <Container ref={DropdownRef} onClick={handleClick} noBm>
        No bookmarks!
      </Container>
    )
  }

  return (
    <Container ref={DropdownRef} onClick={handleClick}>
      {listings.map((listing) => (
        <BmListing key={listing._id} listing={listing} />
      ))}
    </Container>
  )
};

export default Dropdown;
