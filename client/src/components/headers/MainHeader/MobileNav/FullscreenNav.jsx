import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useRouter from 'src/util/hooks/useRouter';
import { useSelector } from 'react-redux';
import api from 'src/util/api';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: white;
  height: 80vh;

  padding: 2rem;
`;

export const NavContainer = styled.div`
  margin-bottom: 1.8rem;
`;

export const NavElt = styled.nav`
  font-size: 1.8rem;
  cursor: pointer;
`;

const FullscreenNav = ({ setIsMenuOpen, absolutePath }) => {
  const router = useRouter();
  const handleRedirect = (path, absolutePath) => {
    if (absolutePath) {
      window.open(path, '_self');
    }
    else {
      router.history.push(path)
      setIsMenuOpen(false);
    }
  }

  const handleSignin = () => {
    api.get('/auth/google')
      .then((res) => console.log('res', res))
      .catch(({ response }) => console.log('response', response))
  }

  const user = useSelector(state => state.user);

  return (
    <Container>
      <NavContainer>
        <NavElt onClick={() => handleRedirect('/')}>Home</NavElt>
      </NavContainer>
      <NavContainer>
        <NavElt onClick={() => handleRedirect('/')}>FAQs</NavElt>
      </NavContainer>
      <NavContainer>
        <NavElt onClick={() => handleRedirect('/new')}>New Listing</NavElt>
      </NavContainer>
      {user
        ? (
          <div>
            <NavContainer>
              <NavElt onClick={() => handleRedirect('/profile')}>My Profile</NavElt>
            </NavContainer>
            <NavContainer>
              <NavElt onClick={() => handleRedirect('/profile/chat')}>Messages</NavElt>
            </NavContainer>
          </div>
        )
        : (
          <NavContainer>
            <NavElt onClick={() => handleRedirect('http://localhost:8081/api/auth/google', true)}>Sign in</NavElt>
          </NavContainer>
        )
      }
      
    </Container>
  )
};

export default FullscreenNav;
