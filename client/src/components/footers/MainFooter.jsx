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

const MadeWithLove = styled(Body)`
  line-height: 1.5;
`

const MainFooter = () => (
  <Container>
    <HrLine />
    <Content>
      <a href="/">
        <Logo />
      </a>
      <Nav>
        <MadeWithLove>Made with ❤️ by Jae, Rebecca, Katie</MadeWithLove>
      </Nav>
    </Content>
  </Container>
);

export default MainFooter;
