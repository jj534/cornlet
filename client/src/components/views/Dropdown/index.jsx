import React, { useEffect, useRef } from 'react';
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

  @media (min-width: ${(props) => props.theme.md}px) {
    position: absolute;
    top: 40px;

    // alignLeft
    left: ${(props) => (props.alignLeft ? 'initial' : '-200px')};
    right: ${(props) => (props.alignLeft ? 'initial' : 'initial')};

    // alignTop
    top: ${(props) => (props.alignTop ? '0' : '')};
  }
  
  border-radius: 2px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border: 1px solid rgba(0, 0, 0, .05);

  white-space: nowrap;

  // show
  display: ${(props) => (props.show ? '' : 'none')};

  // alignTop
  margin-top: ${(props) => (props.alignTop ? '0' : '')};
`;

const Dropdown = ({
  show, setShow, children, alignLeft, alignTop, ...rest
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const DropdownRef = useRef();
  const closeDropdown = () => {
    setShow(false);
    clearAllBodyScrollLocks();
  };
  useOnOutsideClick(DropdownRef, closeDropdown);

  // disable scroll on mobile
  const [scWidth] = useWindowSize();
  useEffect(() => {
    if (show && scWidth < theme.md) disableBodyScroll(DropdownRef);
  }, [show]);

  return (
    <Container
      ref={DropdownRef}
      onClick={handleClick}
      show={show}
      alignLeft={alignLeft}
      alignTop={alignTop}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Dropdown;
