import React from 'react';
import { ReactComponent as BathroomSVG } from 'src/assets/svgs/bathroom.svg';
import { ReactComponent as BedroomSVG } from 'src/assets/svgs/bed.svg';
import { ReactComponent as CalendarRaw } from 'src/assets/svgs/calendar.svg';
import { ReactComponent as PlaceSVG } from 'src/assets/svgs/place.svg';
import { ReactComponent as ProfileSVG } from 'src/assets/svgs/profile.svg';
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: .2rem 0;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    margin: 0 0 .5rem 0;
  }

  // marginTop
  margin-top: ${(props) => (props.marginTop ? '1rem' : '')};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: ${(props) => (props.marginTop ? '1.2rem' : '')};
  }

  // marginTopLarge
  margin-top: ${(props) => (props.marginTopLarge ? '1.5rem' : '')};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: ${(props) => (props.marginTopLarge ? '1.7rem' : '')};
  }

  // marginBottom
  margin-bottom: ${(props) => (props.marginBottom ? '1rem' : '')};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-bottom: ${(props) => (props.marginBottom ? '1.2rem' : '')};
  }

  // marginBottomLarge
  margin-bottom: ${(props) => (props.marginBottomLarge ? '1.5rem' : '')};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-bottom: ${(props) => (props.marginBottomLarge ? '1.7rem' : '')};
  }

  // icon
  justify-content: ${(props) => (props.icon ? 'flex-start' : '')};
`;

export const MapContainer = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    padding: 0 1rem;
  }
`;

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 2rem;
  margin-right: .2rem;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    opacity: .6;
  }

  // mr
  margin-right: ${(props) => (props.mr ? '.5rem' : '')};
`;

export const CalendarSVG = styled(CalendarRaw)`
  width: 30px !important;
`;

export const Fullwidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MsgBtn = styled.button`
  width: 100%;
  max-width: 400px;
  padding: .8rem 0;
  margin-top: 1rem;
  font-size: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  background: ${(props) => props.theme.primary};
  color: white;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

  & svg {
    height: 1.2rem;
    width: 1.2rem;
    fill: white;
    margin-right: 1rem;
  }
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
                        <Row>
                          <Heading>
                            {formatListingDesc(listing)}
                          </Heading>
                          <BmBtn listing={listing} />
                        </Row>
                        <Row icon>
                          <SVGContainer><CalendarSVG /></SVGContainer>
                          <Body muted sm>{getDateString(listing)}</Body>
                        </Row>
                      </Section>
                      {/* contact section */}
                      {/* <Section>
                        <Row marginBottom><Subheading bold>Contact</Subheading></Row>
                        {sold
                          ? <Row><Badge color="primary" inverted>Sold</Badge></Row>
                          : (
                            <Row>
                              {(!cornellOnly || (cornellOnly && signedInUser && signedInUser.email.split('@')[1] === 'cornell.edu'))
                                ? (
                                  <Fullwidth>
                                    <DetailedAvatar
                                      name={displayName || user.name}
                                      src={displayName ? undefined : user.photo}
                                    />
                                    <Btn color="primary" inverted onClick={handleMsgBtnClick}>Message</Btn>
                                  </Fullwidth>
                                )
                                : (
                                  <LockSection>
                                    <LockAvatar>
                                      <LockSVG />
                                    </LockAvatar>
                                    <TextSection>
                                      <Subheading bold>Restricted to Cornell</Subheading>
                                      <Body muted>Sign in with a @cornell.edu account to contact the owner.</Body>
                                    </TextSection>
                                  </LockSection>
                                )}
                            </Row>
                          )}
                      </Section> */}
                      <Section>
                        <Row marginBottomLarge><Subheading bold>Description</Subheading></Row>
                        {availRooms !== 0 && (
                        <Row icon>
                          <SVGContainer mr><BedroomSVG /></SVGContainer>
                          <Body muted sm>
                            {availRooms}
                            {' '}
  room(s) available
                          </Body>
                        </Row>
                        )}
                        {bathrooms !== 0 && (
                        <Row icon>
                          <SVGContainer mr><BathroomSVG /></SVGContainer>
                          <Body muted sm>
                            {bathrooms}
                            {' '}
  bathrooms
                          </Body>
                        </Row>
                        )}
                        {(maleRoommates !== 0 || femaleRoommates !== 0) && (
                        <Row icon>
                          <SVGContainer mr><ProfileSVG /></SVGContainer>
                          <Body muted sm>
                            {maleRoommates + femaleRoommates}
                            {' '}
  roommate(s) during sublet
                          </Body>
                        </Row>
                        )}
                        <Row marginTopLarge marginBottom>
                          <Body lineHeight={1.5}>{desc}</Body>
                        </Row>
                      </Section>
                      <Section>
                        <Row marginBottom><Subheading bold>Location</Subheading></Row>
                        <Row icon>
                          <SVGContainer><PlaceSVG /></SVGContainer>
                          <Body muted sm>{getShortAddr(addr)}</Body>
                        </Row>
                        {toCampus && (
                        <Row icon>
                          <SVGContainer><WalkSVG /></SVGContainer>
                          <Body muted sm>
                            {toCampus}
                            {' '}
  km to campus
                          </Body>
                        </Row>
                        )}
                        <Row marginBottom />
                        {(lat && lng)
                        && (
                        <MapContainer>
                          <Map
                            lat={lat}
                            lng={lng}
                          />
                        </MapContainer>
                        )}
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
