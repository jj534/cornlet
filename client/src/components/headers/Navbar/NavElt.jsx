import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 1rem;
  
  // selected
  border-bottom: ${props => props.selected ? `3px solid ${props.theme.primary}` : ''};
`;

const Label = styled.p`
  opacity: .8;
  
  // selected;
  opacity: ${props => props.selected ? '1' : ''};
  color: ${props => props.selected ? props.theme.primary : ''};
`

const NavElt = ({ label, to }) => {
  const { pathname } = useLocation();
  const selected = pathname === to;
  
  return (
    <Link to={to}>
      <Container selected={selected}>
        <Label selected={selected}>{label}</Label>
      </Container>
    </Link>
  )
};

export default NavElt;
