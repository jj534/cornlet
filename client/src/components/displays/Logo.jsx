import React from 'react';
import styled from 'styled-components';

const LogoText = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
`;

const Logo = () => <LogoText>cornlet</LogoText>;

export default Logo;
