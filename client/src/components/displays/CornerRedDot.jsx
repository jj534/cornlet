import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: -4px;
  right: -2px;
  background: ${(props) => props.theme.danger};
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding: 4px;
  border: 2px solid white;
  z-index: 10;
`;

const CornerRedDot = () => {
  return <Container />;
};

export default CornerRedDot;
