import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: .4rem .6rem;
  background-color: white;
  background-color: ${(props) => (props.inverted ? props.theme[props.color] : '')};
  color: ${(props) => props.theme[props.color]};
  color: ${(props) => (props.inverted ? 'white' : '')};
  display: inline-block;
  font-size: .9rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;

const Btn = ({
  children, color, inverted, ...rest
}) => (
  <Button
    color={color}
    inverted={inverted}
    {...rest}
  >
    {children}
  </Button>
);

export default Btn;
