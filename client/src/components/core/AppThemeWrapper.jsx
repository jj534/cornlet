import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'src/theme/Normalise.scss';
import theme from 'src/theme';
import MainFooter from 'src/components/footers/MainFooter';
import AppReduxWrapper from './AppReduxWrapper';

const Wrapper = styled.div`
  width: 100%;
  min-height: 101vh;
  background-color: rgba(0, 0, 0, .05);
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    width: 70%;
  }
`;

const AppThemeWrapper = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Container>
        <AppReduxWrapper />
        <MainFooter />
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default AppThemeWrapper;
