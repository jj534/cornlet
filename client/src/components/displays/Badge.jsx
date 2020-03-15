import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${(props) => (props.size === 'sm' ? '.3rem .5rem' : '.5rem .8rem')};
  background-color: white;
  background-color: ${(props) => (props.inverted ? props.theme[props.color] : '')};
  color: ${(props) => props.theme[props.color]};
  color: ${(props) => (props.inverted ? 'white' : '')};
  display: inline-block;
  font-size: ${(props) => (props.size === 'sm' ? '.8rem' : 'inherit')};
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const Badge = ({
  children, color, inverted, size, ...rest
}) => (
  <Container
    color={color}
    inverted={inverted}
    size={size}
    {...rest}
  >
    {children}
  </Container>
);

export default Badge;
