import React from 'react';
import styled from 'styled-components';
import Logo from 'src/components/displays/Logo';
import Body from 'src/components/fonts/Body';
import useRouter from 'src/util/hooks/useRouter';
import { Link } from 'react-router-dom';
import useIsMobile from 'src/util/hooks/useIsMobile';

const Container = styled.div`
  background: white;
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
  
  padding: .5rem 0 .8rem 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const MadeWithLove = styled(Body)`
  line-height: 1.5;
`;

const MainFooter = () => {
  const router = useRouter();
  const pathArr = router.pathname.split('/');
  const isChatroomPath = pathArr.length === 4 && pathArr[1] === 'profile' && pathArr[2] === 'chat';
  const isMobile = useIsMobile();

  if (isChatroomPath && isMobile) return <div />;

  return (
    <Container>
      <HrLine />
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <MadeWithLove>
Made with
            {' '}
            <span role="img" aria-label="heart">❤️</span>
            {' '}
by
            <span role="img" aria-label="Cornell Bear">🐻</span>
          </MadeWithLove>
        </Nav>
      </Content>
    </Container>
  );
};

export default MainFooter;
