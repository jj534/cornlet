import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	bottom: 1rem;
	right: .5rem;

  background: ${props => props.theme.primary};
  color: white;
  opacity: .9;
  border-radius: 10px;

  font-weight: 400;
  font-size: .9rem;
  padding: .3rem .8rem;

  // alignTop
  bottom: ${props => props.alignTop ? 'initial' : ''};
  top: ${props => props.alignTop ? '1rem' : ''};
`;

const PriceBadge = ({ children, alignTop }) => {
  return (
    <Container alignTop={alignTop}>
		  {children}
    </Container>
  )
};

export default PriceBadge;
