import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: .4rem .6rem;

  font-size: .9rem;
  font-weight: 400;

  border-radius: 8px;
  box-shadow: ${props => props.inverted ? '0 2px 4px rgba(0, 0, 0, .05)' : ''};
  
  background-color: ${(props) => (props.inverted ? props.theme[props.color] : '')};
  color: white;

  @media (min-width: ${(props) => props.theme.md}px) {
    padding: .5rem .8rem;
  }

  // fullWidth
  width: ${props => props.fullWidth && '100%'};

  // background
  background: ${props => props.background && props.background};
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
