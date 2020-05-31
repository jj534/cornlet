import React, { useState } from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import BackHeader from 'src/components/headers/BackHeader';
import ImgCarousel from 'src/components/displays/ImgCarousel';
import DetailedAvatar from 'src/components/displays/DetailedAvatar';
import Body from 'src/components/fonts/Body';
import Subheading from 'src/components/fonts/Subheading';
import getDateString from 'src/util/helpers/getDateString';
import RenderOn from 'src/containers/RenderOn';
import Badge from 'src/components/displays/Badge';
import BmBtn from 'src/components/buttons/BmBtn';
import { useSelector, useDispatch } from 'react-redux';
import PriceBadge from 'src/components/displays/PriceBadge';
import Heading from 'src/components/fonts/Heading';
import AmenitiesList from 'src/containers/AmenitiesList';
import amenities from 'src/constants/amenities';
import AmenityGrp from 'src/components/displays/AmenityGrp';
import Map from 'src/components/displays/Map';
import getShortAddr from 'src/util/helpers/getShortAddr';
import Btn from 'src/components/buttons/Btn';
import Modal from 'src/components/views/Modal';
import Input from 'src/components/inputs/Input';

import { ReactComponent as LockRaw } from 'src/assets/svgs/lock.svg';
import { ReactComponent as PlaceSVG } from 'src/assets/svgs/place.svg';
import { ReactComponent as CalendarRaw } from 'src/assets/svgs/calendar.svg';
import { ReactComponent as WalkSVG } from 'src/assets/svgs/walk.svg';
import { ReactComponent as BedroomSVG } from 'src/assets/svgs/bed.svg';
import { ReactComponent as BathroomSVG } from 'src/assets/svgs/bathroom.svg';
import { ReactComponent as ProfileSVG } from 'src/assets/svgs/profile.svg';
import { ReactComponent as ChatSVG } from 'src/assets/svgs/chat.svg';
import HoriCenter from 'src/containers/HoriCenter';
import api from 'src/util/api';
import log from 'src/util/log';
import useRouter from 'src/util/hooks/useRouter';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    padding-top: 3rem;
  }
`;

const Container = styled.div`
`;

const ImgInnerContainer = styled.div`
  width: 100vw;
  position: relative;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    width: 700px;
    margin-right: 2rem;
    height: auto;
  }
`;

const Content = styled.div`
  margin-top: 1.5rem;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: 0;
    width: 500px;
  }
`;

const ListingSection = styled.div`
  @media (min-width: ${(props) => props.theme.md}px) {
    display: flex;
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
  margin-top: ${props => props.marginTop ? '1rem' : ''};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: ${props => props.marginTop ? '1.2rem' : ''};
  }

  // marginTopLarge
  margin-top: ${props => props.marginTopLarge ? '1.5rem' : ''};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-top: ${props => props.marginTopLarge ? '1.7rem' : ''};
  }

  // marginBottom
  margin-bottom: ${props => props.marginBottom ? '1rem' : ''};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-bottom: ${props => props.marginBottom ? '1.2rem' : ''};
  }

  // marginBottomLarge
  margin-bottom: ${props => props.marginBottomLarge ? '1.5rem' : ''};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin-bottom: ${props => props.marginBottomLarge ? '1.7rem' : ''};
  }

  // icon
  justify-content: ${props => props.icon ? 'flex-start' : ''};
`;

export const MapContainer = styled.div`
  @media (min-width: ${props => props.theme.md}px) {
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
`

export const CalendarSVG = styled(CalendarRaw)`
  width: 30px !important;
`;

const LockSection = styled.div`
  display: flex;
  align-items: flex-start;
`

const LockSVG = styled(LockRaw)`
  height: 1rem;
  opacity: .6;
`

const LockAvatar = styled.div`
  height: 40px;
  width: 40px;
  background: rgba(0, 0, 0, .1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  border-radius: 50%;
  padding: .5rem;
  margin-right: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TextSection = styled.div`
  max-width: 270px;
`

export const Fullwidth = styled.div`
  width: 100%;
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

  background: ${props => props.theme.primary};
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

`;


const Listing = ({ listing }) => {
  const {
    imgs, addr, price, user, desc, sold, displayName, displayEmail, cornellOnly, totalRooms, availRooms, bathrooms, type, toCampus, maleRoommates, femaleRoommates, lat, lng
  } = listing;

  const signedInUser = useSelector((state) => state.user);
  let availAmenities = amenities.filter((amenity) => listing.amenities.includes(amenity.value));

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const chatrooms = useSelector((state) => state.chatrooms);
  const handleMsgBtnClick = () => {
    const existing = chatrooms.filter((chatroom) => chatroom.listing._id === listing._id);
    if (existing.length !== 0) {
      router.push(`/profile/chat/${existing[0]._id}`);
    }
    else {
      setOpen(true);
    }
  }
  const handleClose = () => {
    setOpen(false)
  };
  const createMsg = () => {
    handleClose();

    // DB create
    // DB must be created first to get the data schema
    const reqData = {
      lid: listing._id,
      msgContent: msg,
      searcherUid: signedInUser.uid,
      ownerUid: user.uid,
    }
    api.post('/chatroom/create', reqData)
      .then(({ data }) => {
        // add chatroom to redux
        dispatch({
          type: 'CHATROOMS_ADD',
          payload: data,
        })

        // redirect
        router.push(`/profile/chat/${data._id}`);
      })
      .catch(({ response }) => log('Listing', response));
  }

  return (
    <div>
      <RenderOn desktop>
        <MainHeader />
      </RenderOn>
      <Wrapper>
        <Container>
          <RenderOn mobile>
            <BackHeader fullwidth />
          </RenderOn>
          <ListingSection>
            <ImgInnerContainer>
              <ImgCarousel imgs={imgs} />
              <PriceBadge alignTop lg>${price}</PriceBadge>
            </ImgInnerContainer>
            <Content>
              <Section>
                <Row>
                  <Heading>{totalRooms || 1}-Bedroom {type.charAt(0).toUpperCase() + type.slice(1)}</Heading>
                  <BmBtn listing={listing} />
                </Row>
                <Row icon>
                  <SVGContainer><CalendarSVG /></SVGContainer>
                  <Body muted sm>{getDateString(listing)}</Body>
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
                      <Body muted sm>{toCampus} km to campus</Body>
                    </Row>
                  )}
                  <Row marginBottom />
                {(lat && lng) && 
                  <MapContainer>
                    <Map
                      lat={lat}
                      lng={lng}
                    />
                  </MapContainer>
                }
              </Section>
              <Section>
                <Row marginBottomLarge><Subheading bold>Description</Subheading></Row>
                  {availRooms !== 0 && (
                    <Row icon>
                      <SVGContainer><BedroomSVG /></SVGContainer>
                      <Body muted sm>{availRooms} room(s) available</Body>
                    </Row>
                  )}
                  {bathrooms !== 0 && (
                    <Row icon>
                      <SVGContainer><BathroomSVG /></SVGContainer>
                      <Body muted sm>{bathrooms} bathrooms</Body>
                    </Row>
                  )}
                  {(maleRoommates !== 0 || femaleRoommates !== 0) && (
                    <Row icon>
                      <SVGContainer><ProfileSVG /></SVGContainer>
                      <Body muted sm>{maleRoommates + femaleRoommates} roommate(s) during sublet</Body>
                    </Row>
                  )}
                <Row marginTopLarge marginBottom>
                  <Body lineHeight={1.5}>{desc}</Body>
                </Row>
              </Section>
              {availAmenities.length > 0 && 
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
                          active={true} 
                        />
                      ))}
                    </AmenitiesList>
                  </Row>
                </Section>
              }
              <Section>
                <Row marginBottom><Subheading bold>Contact</Subheading></Row>
                {sold  
                  ? <Row><Badge color='primary' inverted>Sold</Badge></Row>
                  :(
                    <Row>
                      {(!cornellOnly || cornellOnly && signedInUser && signedInUser.email.split('@')[1] === 'cornell.edu')
                        ? (
                          <Fullwidth>
                            <DetailedAvatar
                              name={displayName || user.name}
                              src={displayName ? undefined : user.photo}
                            />
                            <MsgBtn onClick={handleMsgBtnClick}><ChatSVG />Message {user.name.split(' ')[0]}</MsgBtn>
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
                          )
                      }
                    </Row>
                  )
                }
              </Section>
            </Content>
          </ListingSection>
        </Container>
      </Wrapper>
      <Modal
        open={open}
        handleClose={handleClose}
        heading={`Message ${user.name.split(' ')[0]}`}
      >
        <ModalContents>
          <Body>Ask any questions that you want to clarify!</Body>
          <Input 
            multiline
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <HoriCenter>
            <Btn
              color='primary'
              inverted
              onClick={createMsg}
            >
              Send Message
            </Btn>
          </HoriCenter>
        </ModalContents>
      </Modal>
    </div>
  );
};

export default Listing;
