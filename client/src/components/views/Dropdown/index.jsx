import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;
  position: absolute;
  top: 3rem;
  right: 0;
  display: ${(props) => (props.show ? 'inline-block' : 'none')};
  overflow: overlay;
  width: 100px;
`;

const Dropdown = ({
  show, setShow, children, ...rest
}) => (
  <Container
    show={show}
  >
    {children}
  </Container>
);

export default Dropdown;
