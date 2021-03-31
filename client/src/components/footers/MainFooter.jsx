import React from 'react';
import styled from 'styled-components';
import Logo from 'src/components/displays/Logo';
import Body from 'src/components/fonts/Body';
import useRouter from 'src/util/hooks/useRouter';
import { Link } from 'react-router-dom';
import useIsMobile from 'src/util/hooks/useIsMobile';
import { matchPath } from "react-router";
import Space from '../layouts/Space';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 2rem 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  padding: 0 .3rem;
`

const MainFooter = () => {
  const router = useRouter();
  const matched = matchPath(router.pathname, {
    path: "/listing/:lid",
    exact: true,
    strict: false
  })
  const pathArr = router.pathname.split('/');
  const isChatroomPath = pathArr.length === 4 && pathArr[1] === 'profile' && pathArr[2] === 'chat';
  const isMobile = useIsMobile();

  if (isChatroomPath && isMobile) return <div />;

  return (
    <Container>
      {isMobile && <Body sm>contactcornlet@gmail.com</Body>}
      <Content>
        <Body sm>
          {!isMobile && 'contactcornlet@gmail.com |'}
          <StyledLink to='/terms-conditions'>Terms of Service</StyledLink> |
          <StyledLink to='/privacy-policy'>Privacy Policy</StyledLink> |
          <StyledLink to='/cookie-policy'>Cookie Policy</StyledLink>
        </Body>
      </Content>
      {isMobile && matched && matched.isExact && (
        <Space margin='3rem 0' />
      )}
    </Container>
  );
};

export default MainFooter;
