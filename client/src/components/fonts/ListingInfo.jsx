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


const TextLines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > div {
    margin-bottom: .5rem;
  }

  @media (min-width: ${props => props.theme.md}px) {
    flex-direction: row;
    align-items: center;

    & > div {
      margin-bottom: 0;
    }
  }
`;

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

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled(CloseRaw)`
  height: 1.2rem;
  opacity: .7;
  cursor: pointer;
`;

const ListingInfo = ({ listing, isShowingClose, onCloseClick }) => {
  const {
    price, sold, availRooms
  } = listing || {};

  const isDesktop = useIsDesktop();

  return (
    <div>
      <TextArea>
        <TopRow>
          {isDesktop && <Overline style={{ marginBottom: '.4rem' }}>{sold ? 'Not' : `${availRooms} bedrooms`} available</Overline>}
          {isShowingClose && (
            <IconContainer>
              <CloseIcon onClick={onCloseClick} />
            </IconContainer>
          )}
        </TopRow>
        <Title>{formatListingDesc(listing)}</Title>
        <div style={{ marginTop: '.5rem' }}>
          {sold
            ? <BadgeV2 
                color={theme.brand} 
                background={theme.brand50} 
                label='Sold' 
              />
            : (
              <TextLines>
                <div>
                  <Body muted sm>{getShortDateString(listing)}</Body>
                </div>
                <div>
                  <Body><span style={{ fontWeight: 500 }}>${price}</span> <span style={{ opacity: .6 }}>/ month</span></Body>
                </div>
              </TextLines>
            )
          }
        </div>
      </TextArea>
    </div>
  )
}

export default ListingInfo
