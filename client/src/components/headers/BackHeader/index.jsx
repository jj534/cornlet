import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Left } from 'src/assets/svgs/left.svg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem ${props => props.fullwidth ? '2rem' : '.5rem'};
`;

const BackBtn = styled(Left)`
  width: 20px;
  height: 20px;
  opacity: .8
  cursor: pointer;
`

const BackHeader = ({ to, fullwidth }) => {
  const history = useHistory();
  const handleClick = () => {
    if (to) history.push(to);
    else history.push('/')
  }
  
  return (
    <Container fullwidth={fullwidth}>
      <BackBtn onClick={handleClick}/>
    </Container>
  )
};

export default BackHeader;
