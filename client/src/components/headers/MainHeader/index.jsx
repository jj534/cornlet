import React from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import { Link } from 'react-router-dom';
import Auth from 'src/components/buttons/Auth';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0 2rem 0;
  
  @media (min-width: ${props => props.theme.md}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  
  & > * {
    margin-left: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
`;


const MainHeader = () => (
  <Container>
    <Link to="/">
      <Logo>cornlet</Logo>
    </Link>
    <Right>
      <Link to="/new">
        <Btn
          color="primary"
          inverted
        >
new
        </Btn>
      </Link>
      <Auth />
    </Right>
  </Container>
);

export default MainHeader;
