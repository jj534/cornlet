import React, { useState } from 'react';
import styled from 'styled-components';
import FullscreenNav from './FullscreenNav';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding-right: .5rem;
`;

export const Burger = styled.div`
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, .8);
  margin-bottom: .3rem;
`;

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Burger onClick={() => setIsMenuOpen(true)}>
          <Line />
          <Line />
          <Line />
        </Burger>
      </Container>
      {isMenuOpen && <FullscreenNav setIsMenuOpen={setIsMenuOpen} />}
    </Wrapper>
  )
};

export default MobileNav;
