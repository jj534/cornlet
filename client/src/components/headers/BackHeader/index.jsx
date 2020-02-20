import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Left } from 'src/assets/svgs/left.svg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;

`;

const BackBtn = styled(Left)`
  width: 20px;
  height: 20px;
  opacity: .8
  cursor: pointer;
`

const BackHeader = () => {
  const history = useHistory();
  const goBack = () => history.push('/');
  return (
    <Container>
      <BackBtn onClick={goBack}/>
    </Container>
  )
};

export default BackHeader;
