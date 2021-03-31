import React from 'react';
import { ReactComponent as BathroomSVG } from 'src/assets/svgs/bathroom.svg';
import { ReactComponent as BedroomSVG } from 'src/assets/svgs/bed.svg';
import { ReactComponent as CalendarSVG } from 'src/assets/svgs/calendar.svg';
import { ReactComponent as ProfileSVG } from 'src/assets/svgs/face.svg';
import Body from 'src/components/fonts/Body';
import { FlexRow } from 'src/components/layouts/Flex';
import Space from 'src/components/layouts/Space';
import getDateString from 'src/util/helpers/getDateString';
import styled from 'styled-components';

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: .8rem;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    opacity: .8;
  }
`;

const IconsSection = ({ listing }) => {
  const { availRooms, bathrooms, maleRoommates, femaleRoommates, price } = listing || {};

  return (
    <div>
      <FlexRow alignCenter>
        <SVGContainer><CalendarSVG /></SVGContainer>
        <Body fontWeight={400}>{getDateString(listing)}</Body>
      </FlexRow>
      {availRooms !== 0 && (
        <>
          <Space margin='1rem 0' />
          <FlexRow alignCenter>
            <SVGContainer><BedroomSVG /></SVGContainer>
            <Body fontWeight={400}>{availRooms} room(s) available</Body>
          </FlexRow>
        </>
      )}
      {bathrooms !== 0 && (
        <>
          <Space margin='1rem 0' />
          <FlexRow alignCenter>
            <SVGContainer><BathroomSVG /></SVGContainer>
            <Body fontWeight={400}>{bathrooms} bathrooms</Body>
          </FlexRow>
        </>
      )}
      {(maleRoommates !== 0 || femaleRoommates !== 0) && (
        <>
          <Space margin='1rem 0' />
          <FlexRow alignCenter>
            <SVGContainer><ProfileSVG /></SVGContainer>
            <Body fontWeight={400}>{maleRoommates + femaleRoommates} roommate(s) during sublet</Body>
          </FlexRow>
        </>
      )}
    </div>
  )
}

export default IconsSection
