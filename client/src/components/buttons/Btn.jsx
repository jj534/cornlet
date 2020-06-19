import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: .4rem .6rem;
  background-color: white;
  display: inline-block;
  font-size: .9rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.primary};
  
  @media (min-width: ${(props) => props.theme.md}px) {
    padding: .5rem .8rem;
  }

  // inverted
  color: ${(props) => (props.inverted ? 'white' : '')};
  background-color: ${(props) => (props.inverted ? props.theme[props.color] : '')};
  box-shadow: ${props => props.inverted ? '0 2px 4px rgba(0, 0, 0, .2)' : ''};

  // color
  color: ${(props) => props.inverted ? '' : props.theme[props.color]};
`;

const Btn = ({
  children, color, inverted, type, ...rest
}) => (
  <Button
    color={color}
    inverted={inverted}
    type={type || 'button'}
    {...rest}
  >
    {children}
  </Button>
);

export default Btn;
