import React from 'react';
import styled from 'styled-components';
import Body from '../fonts/Body';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  & p {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

const PolicyDisclaimer = ({ action, ...rest}) => {
  return (
    <Container>
      <Body muted>By {action || 'using Cornlet'}, you agree to its <StyledLink to='/terms-conditions'>Terms of Service</StyledLink> and <StyledLink to='/privacy-policy'>Privacy Policy</StyledLink></Body>
    </Container>
  )
};

export default PolicyDisclaimer;
