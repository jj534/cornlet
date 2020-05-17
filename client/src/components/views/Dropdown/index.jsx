import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnOutsideClick from 'src/util/hooks/useOnOutsideClick';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import theme from 'src/theme';
import useWindowSize from 'src/util/hooks/useWindowSize';

const Container = styled.div`
  position: fixed;
  margin-top: 10px;
  left: 10px;
  right: 10px;
  z-index: 5;
  ${'' /* overflow: auto; */}

  @media (min-width: ${props => props.theme.md}px) {
    position: absolute;
    top: 40px;

    // alignLeft
    left: ${props => props.alignLeft ? 'initial' : '-200px'};
    right: ${props => props.alignLeft ? 'initial' : 'initial'};
  }
  
  border-radius: 2px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border: 1px solid rgba(0, 0, 0, .05);

  white-space: nowrap;

  // show
  display: ${props => props.show ? '' : 'none'};
`;

const Dropdown = ({
  show, setShow, children, alignLeft, ...rest
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  }
  const DropdownRef = useRef();
  const closeDropdown = () => {
    setShow(false);
    clearAllBodyScrollLocks();
  }
  useOnOutsideClick(DropdownRef, closeDropdown);

  // disable scroll on mobile
  const [scWidth, height] = useWindowSize();
  useEffect(() => {
    if (show && scWidth < theme.md) disableBodyScroll(DropdownRef);
  }, [show])

  return (
    <Container 
    ref={DropdownRef} 
    onClick={handleClick} 
    show={show}
    alignLeft={alignLeft}
    {...rest}
    >
      {children}
    </Container>
  )
}

export default Dropdown;
