import React from 'react';
import styled from 'styled-components';
import Body from '../fonts/Body';
import Subheading from '../fonts/Subheading';

const AmenityGrpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4rem;
  margin: 1rem 1rem 0 0;
  opacity: .5;
  cursor: pointer;

  // active
  opacity: ${props => props.active ? '1' : ''};

  // count
  width: ${props => props.count ? '5rem' : ''};
`

const Row = styled.div`
  display: flex;
  align-items: ${props => props.count ? 'flex-end' : 'center'};
  margin-bottom: .5rem;
  margin-top: ${props => props.count ? '.3rem' : ''};

  & > svg {
    height: ${props => props.count ? '2rem' : '2.5rem'};
    width: ${props => props.count ? '2rem' : '2.5rem'};
  }

  & > h2 {
    font-weight: bold;
    opacity: .9;
    margin-right: .4rem;
    font-size: 1.3rem;
    line-height: 1;
  }
`

const AmenityGrp = ({ icon, label, count, active, onClick }) => (
  <AmenityGrpContainer 
    active={active} 
    onClick={onClick}
    count={count == 0 ? true : count}
  >
    <Row count={count}>
      <Subheading>{count}</Subheading>{icon}
    </Row>
    <Body>{label}</Body>
  </AmenityGrpContainer>
)

export default AmenityGrp;
