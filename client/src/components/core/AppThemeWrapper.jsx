import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'src/theme/Normalise.scss';
import theme from 'src/theme';
import MainFooter from 'src/components/footers/MainFooter';
import AppReduxWrapper from './AppReduxWrapper';

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

const AppThemeWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <AppReduxWrapper />
          <MainFooter />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

export default AppThemeWrapper;
