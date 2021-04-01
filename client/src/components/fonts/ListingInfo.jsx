import React from 'react'
import styled from 'styled-components';
import formatListingDesc from 'src/util/helpers/formatListingDesc';
import getShortDateString from 'src/util/helpers/getShortDateString';
import BadgeV2 from '../displays/BadgeV2';
import Body from './Body';
import { ReactComponent as CloseRaw } from 'src/assets/svgs/close-material.svg';
import IconContainer from '../displays/IconContainer';
import theme from 'src/theme';
import useIsDesktop from 'src/util/hooks/useIsDesktop';
import { FlexRow } from '../layouts/Flex';
import getDateString from 'src/util/helpers/getDateString';
import Space from '../layouts/Space';

const TextArea = styled.div`
  padding: 0 .2rem;
  width: 100%;
`;

const Title = styled.h3`
  white-space: nowrap;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: .5rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const Overline = styled.p`
  white-space: nowrap;
  flex-grow: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: .8rem;
  font-weight: 500;
  text-transform: uppercase;
  opacity: .7;
`;

const CloseIcon = styled(CloseRaw)`
  height: 1.2rem;
  opacity: .7;
  cursor: pointer;
`;

const ListingInfo = ({ listing, isShowingClose, onCloseClick }) => {
  const {
    price, sold, availRooms, toCampus
  } = listing || {};

  return (
    <div>
      <TextArea>
        <FlexRow justifySpaceBetween alignCenter>
          <Overline style={{ marginBottom: '.4rem' }}>{sold ? 'Not' : `${availRooms} bedrooms`} available</Overline>
          {isShowingClose && (
            <IconContainer>
              <CloseIcon onClick={onCloseClick} />
            </IconContainer>
          )}
        </FlexRow>
        <Title>{formatListingDesc(listing)}</Title>
        <Space margin='.5rem 0' />
        <div>
          {sold
            ? <BadgeV2 
                color={theme.brand} 
                background={theme.brand50} 
                label='Sold' 
              />
            : (
              <FlexRow justifySpaceBetween alignCenter>
                <div>
                  <Body muted sm>{getDateString(listing)}</Body>
                </div>
                <div>
                  <Body><span style={{ fontWeight: 500 }}>${price}</span> <span style={{ opacity: .6 }}>/ month</span></Body>
                </div>
              </FlexRow>
            )
          }
        </div>
      </TextArea>
    </div>
  )
}

export default ListingInfo
