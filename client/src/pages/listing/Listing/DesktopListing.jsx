import React from 'react';
import { ReactComponent as BathroomSVG } from 'src/assets/svgs/bathroom.svg';
import { ReactComponent as BedroomSVG } from 'src/assets/svgs/bed.svg';
import { ReactComponent as CalendarSVG } from 'src/assets/svgs/calendar.svg';
import { ReactComponent as PlaceSVG } from 'src/assets/svgs/place.svg';
import { ReactComponent as ProfileSVG } from 'src/assets/svgs/face.svg';
import { ReactComponent as WalkSVG } from 'src/assets/svgs/walk.svg';
import BmBtn from 'src/components/buttons/BmBtn';
import Btn from 'src/components/buttons/Btn';
import Map from 'src/components/displays/Map';
import PolicyDisclaimer from 'src/components/displays/PolicyDisclaimer';
import Body from 'src/components/fonts/Body';
import Heading from 'src/components/fonts/Heading';
import Subheading from 'src/components/fonts/Subheading';
import BackHeader from 'src/components/headers/BackHeader';
import MainHeader from 'src/components/headers/MainHeader';
import Input from 'src/components/inputs/Input';
import { FlexRow } from 'src/components/layouts/Flex';
import Space from 'src/components/layouts/Space';
import Modal from 'src/components/views/Modal';
import HoriCenter from 'src/containers/HoriCenter';
import formatListingDesc from 'src/util/helpers/formatListingDesc';
import getDateString from 'src/util/helpers/getDateString';
import getShortAddr from 'src/util/helpers/getShortAddr';
import styled from 'styled-components';
import ImgPanels from './ImgPanels';
import RightSidePanel from './RightSidePanel';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    padding-top: 3rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px; 
`;

const Content = styled.div`
  margin-top: 1.5rem;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: 0;
    flex: 2;
    max-width: 700px;
    padding: 0 1rem;
  }
`;

const ListingSection = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    padding: 4rem 0 8rem 0;
  }
`;

const Section = styled.div`
  margin: 1rem 0 3.5rem 0;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: 0;
  }
`;

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

const SVGLabel = styled(Body)`
  font-size: 1rem;
  font-weight: 400;
`;

export const Fullwidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContents = styled.div`
  text-align: start;
`;

const RightSidePanelContainer = styled.div`
  width: 20%;
  min-width: 300px;
`;

const DesktopListing = ({ 
  listing,
  signedInUser,
  handleMsgBtnClick,
  open,
  handleClose,
  msg,
  setMsg,
  handleCreateMsg,
}) => {
  const {
    imgs, addr, price, user, desc, sold, displayName, cornellOnly,
    totalRooms, availRooms, bathrooms, type, toCampus,
    maleRoommates, femaleRoommates, lat, lng,
  } = listing;

  return (
    <div>
      <MainHeader />
      <Wrapper>
        <Container>
          <BackHeader 
            label='Return to listings'
            fullwidth 
          />
            {(!listing.active || listing.deleted)
              ? <Body>This listing is inactive or has been deleted by the owner.</Body>
              : (
                <ListingSection>
                  <ImgPanels imgs={imgs} />
                  <Space margin='3rem 0' />
                  <FlexRow justifySpaceBetween>
                    <Content>
                      <Section>
                        <FlexRow justifySpaceBetween>
                          <Heading>
                            {formatListingDesc(listing)}
                          </Heading>
                          <BmBtn listing={listing} />
                        </FlexRow>
                        <Space margin='2rem 0' />
                        <div>
                          <FlexRow alignCenter>
                            <SVGContainer><CalendarSVG /></SVGContainer>
                            <SVGLabel>{getDateString(listing)}</SVGLabel>
                          </FlexRow>
                          {availRooms !== 0 && (
                            <>
                              <Space margin='1rem 0' />
                              <FlexRow alignCenter>
                                <SVGContainer><BedroomSVG /></SVGContainer>
                                <SVGLabel>{availRooms} room(s) available</SVGLabel>
                              </FlexRow>
                            </>
                          )}
                          {bathrooms !== 0 && (
                            <>
                              <Space margin='1rem 0' />
                              <FlexRow alignCenter>
                                <SVGContainer><BathroomSVG /></SVGContainer>
                                <SVGLabel>{bathrooms} bathrooms</SVGLabel>
                              </FlexRow>
                            </>
                          )}
                          {(maleRoommates !== 0 || femaleRoommates !== 0) && (
                            <>
                              <Space margin='1rem 0' />
                              <FlexRow alignCenter>
                                <SVGContainer><ProfileSVG /></SVGContainer>
                                <SVGLabel>{maleRoommates + femaleRoommates} roommate(s) during sublet</SVGLabel>
                              </FlexRow>
                            </>
                          )}
                        </div>
                      </Section>

                      {/* location section */}
                      <Section>
                        <Subheading bold>Location</Subheading>
                        <Space margin='1.5rem 0' />
                        {/* <FlexRow alignCenter>
                          <SVGContainer><PlaceSVG /></SVGContainer>
                          <SVGLabel>{getShortAddr(addr)}</SVGLabel>
                        </FlexRow> */}
                        {toCampus && (
                          <SVGLabel>{toCampus} km to campus</SVGLabel>
                        )}
                        <Space margin='1.5rem 0' />
                        {(lat && lng) && (
                          <div>
                            <Map
                              lat={lat}
                              lng={lng}
                            />
                          </div>
                        )}
                      </Section>

                      {/* description section */}
                      <Section>
                        <Subheading bold>Description</Subheading>
                        <Space margin='1.5rem 0' />
                        <Body lineHeight={1.5}>{desc}</Body>
                      </Section>
                      {/* {availAmenities.length > 0
                      && (
                      <Section>
                        <Row><Subheading bold>Amenities</Subheading></Row>
                        <Row>
                          <AmenitiesList>
                            {availAmenities.map((amenity) => (
                              <AmenityGrp
                                key={amenity.value}
                                count={amenity.count}
                                icon={amenity.icon}
                                label={amenity.label}
                                active
                              />
                            ))}
                          </AmenitiesList>
                        </Row>
                      </Section>
                      )} */}
                    </Content>
                    <RightSidePanelContainer>
                      <RightSidePanel 
                        listing={listing}
                        handleMsgBtnClick={handleMsgBtnClick}
                        signedInUser={signedInUser}
                      />
                    </RightSidePanelContainer>
                  </FlexRow>
                </ListingSection>
              )}
        </Container>
      </Wrapper>
      <Modal
        open={open}
        handleClose={handleClose}
        heading={`Message ${user.name.split(' ')[0]}`}
      >
        <ModalContents>
          <Body margin='2rem 0 0 0'>Ask any questions that you want to clarify!</Body>
          <Input
            multiline
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <PolicyDisclaimer
            action='sending a message on Cornlet'
          />
          <HoriCenter>
            <Btn
              color="primary"
              inverted
              onClick={handleCreateMsg}
            >
              Send Message
            </Btn>
          </HoriCenter>
        </ModalContents>
      </Modal>
    </div>
  )
}

export default DesktopListing
