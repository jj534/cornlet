import React from 'react';
import styled from 'styled-components';
import NavElt from './NavElt';

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const NavRow = styled.div`
  display: flex;
  
`;

const HrLine = styled.div`
  position: absolute;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  left: 0;
  right: 0;
`;

const Navbar = () => {
  const BookmarksElt = (
    <NavElt
      label="Bookmarks"
      to="/profile/bookmarks"
    />
  );

  return (
    <Container>
      <NavRow>
        <NavElt
          label="Listings"
          to="/profile/listings"
        />
        <NavElt
          label="Settings"
          to="/profile/settings"
        />
      </NavRow>
      <HrLine />
    </Container>
  );
};

export default Navbar;
