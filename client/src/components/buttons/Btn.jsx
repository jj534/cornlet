import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: .6rem .9rem;

  font-size: .9rem;
  font-weight: 400;

  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow};
  background: ${props => props.theme.brand};
  color: white;

  @media (min-width: ${(props) => props.theme.md}px) {
    padding: .5rem .8rem;
  }

  // fullWidth
  width: ${props => props.fullWidth && '100%'};

  // background
  background: ${props => props.background && props.background};

  // disabled
  background: ${props => props.disabled && props.theme.grey[400]};
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
