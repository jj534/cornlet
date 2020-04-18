import React from 'react';
import styled from 'styled-components';
import Logo from 'src/components/displays/Logo';
import Body from 'src/components/fonts/Body';

const Container = styled.div`
  margin-top: 2rem;
`;

const HrLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(0, 0, 0, .2);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 1rem 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavElt = styled.div`
  margin-left: 1rem;
`;

const NavText = styled(Body)`
  opacity: .9;
`;

const MainFooter = () => (
  <Container>
    <HrLine />
    <Content>
      <Logo />
      <Nav>
        <NavElt>
          <a href="/">
            <NavText>Home</NavText>
          </a>
        </NavElt>
        <NavElt>
          <a href="/profile">
            <NavText>Profile</NavText>
          </a>
        </NavElt>
        <NavElt>
          <a href="/new">
            <NavText>Create Listing</NavText>
          </a>
        </NavElt>
      </Nav>
    </Content>
  </Container>
);

export default MainFooter;
