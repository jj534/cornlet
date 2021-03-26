import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'src/theme';
import AppReduxWrapper from './AppReduxWrapper';
import PerfectScrollbar from 'react-perfect-scrollbar'

import 'src/theme/Normalise.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100.5vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    max-width: 1565px;
  }
`;

const AppThemeWrapper = () => (
  <ThemeProvider theme={theme}>
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <Wrapper>
        <Container>
          <AppReduxWrapper />
        </Container>
      </Wrapper>
    </PerfectScrollbar>
  </ThemeProvider>
);

export default AppThemeWrapper;
