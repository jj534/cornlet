import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnOutsideClick from 'src/util/hooks/useOnOutsideClick';

const Container = styled.div`
  position: absolute;
  margin-top: 10px;
  left: 0;
  right: 0;
  z-index: 5;

  @media (min-width: ${(props) => props.theme.md}px) {
    top: 40px;
    width: auto;

    // alignLeft
    left: ${(props) => (props.alignLeft && 'initial')};
    right: initial;

    // alignRight
    left: ${(props) => (props.alignRight && '-375px')};
    right: ${props => props.alignRight && '0'};

    // alignTop
    top: ${(props) => (props.alignTop ? '0' : '')};
  }

  & div {
    white-space: nowrap;
    flex-shrink: 0;
  }

  // show
  display: ${(props) => (props.show ? '' : 'none')};

  // alignTop
  margin-top: ${(props) => (props.alignTop ? '0' : '')};
`;

const Dropdown = ({
  show, setShow, children, alignLeft, alignRight, alignTop, ...rest
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const DropdownRef = useRef();
  const closeDropdown = () => {
    setShow(false);
  };
  useOnOutsideClick(DropdownRef, closeDropdown);

  return (
    <Container
      ref={DropdownRef}
      onClick={handleClick}
      show={show}
      alignLeft={alignLeft}
      alignRight={alignRight}
      alignTop={alignTop}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Dropdown;
