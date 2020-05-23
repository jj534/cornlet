import React from 'react';
import styled from 'styled-components';
import Body from '../fonts/Body';
import Subheading from '../fonts/Subheading';

const AmenityGrpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4.5rem;
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

export const LineTwo = styled(Body)`
  // lineTwo
  opacity: ${props => props.lineTwo ? '' : '0'};
`;

const AmenityGrp = ({ icon, label, active, onClick }) => {
  const lineOne = label.split(' ')[0];
  const lineTwo = label.split(' ')[1];

  return (
    <AmenityGrpContainer 
      onClick={onClick}
    >
      <Row active={active}>
        {icon}
      </Row>
      <Body sm>{lineTwo ? lineOne : label}</Body>
      <LineTwo sm lineTwo={lineTwo}>{lineTwo || lineOne}</LineTwo>
    </AmenityGrpContainer>
)}

export default AmenityGrp;
