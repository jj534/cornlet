import React from 'react';
import styled from 'styled-components';
import Badge from 'src/components/displays/Badge';
import { Link } from 'react-router-dom';
import Auth from 'src/components/buttons/Auth';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 3rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  
  & > * {
    margin-left: 1rem;
  }
`

const Logo = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`


const MainHeader = () => {
  
  return (
    <Container>
      <Logo>cornlet</Logo>
      <Right>
      <Link to='/new'>
        <Badge
          color='primary'
          inverted={1}
        >new</Badge>
      </Link>
      <Auth />
      </Right>
    </Container>
  )
};

export default MainHeader;
