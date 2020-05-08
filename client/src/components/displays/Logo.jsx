import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoRaw } from 'src/assets/svgs/logo.svg';

const LogoSVG = styled(LogoRaw)`
  height: 3rem;
  cursor: pointer;
`

const Logo = () => <LogoSVG />;

export default Logo;
