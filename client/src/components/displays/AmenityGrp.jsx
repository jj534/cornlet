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
    height: 1.7rem;
    width: 1.7rem;
    opacity: ${props => props.active ? .7 : .3};
  }

  & > h2 {
    font-weight: bold;
    opacity: .9;
    margin-right: .4rem;
    font-size: 1.3rem;
    line-height: 1;
  }
`

const AmenityGrp = ({ icon, label, active, onClick }) => (
  <AmenityGrpContainer 
    onClick={onClick}
  >
    <Row active={active}>
      {icon}
    </Row>
    <Body sm>{label}</Body>
  </AmenityGrpContainer>
)

export default AmenityGrp;
