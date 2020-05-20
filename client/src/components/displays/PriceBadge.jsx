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

  // lg
  font-size: ${props => props.lg ? '1.2rem' : ''};
  padding: ${props => props.lg ? '.5rem 1rem' : ''};
  right: ${props => props.lg ? '1rem' : ''};
`;

const PriceBadge = ({ children, alignTop, lg }) => {
  return (
    <Container alignTop={alignTop} lg={lg}>
		  {children}
    </Container>
  )
};

export default PriceBadge;
