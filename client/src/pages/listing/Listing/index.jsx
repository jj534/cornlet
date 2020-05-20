import React from 'react';
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
import { useSelector } from 'react-redux';
import PriceBadge from 'src/components/displays/PriceBadge';
import Heading from 'src/components/fonts/Heading';
import AmenitiesList from 'src/containers/AmenitiesList';
import amenities from 'src/constants/amenities';
import publicAmenities from 'src/constants/publicAmenities';
import AmenityGrp from 'src/components/displays/AmenityGrp';

import { ReactComponent as LockRaw } from 'src/assets/svgs/lock.svg';
import { ReactComponent as PlaceSVG } from 'src/assets/svgs/place.svg';
import { ReactComponent as CalendarRaw } from 'src/assets/svgs/calendar.svg';
import { ReactComponent as WalkSVG } from 'src/assets/svgs/walk.svg';

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
  margin: 1rem 0 2.5rem 0;
  
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

  // marginBottom
  margin: ${props => props.marginBottom ? '.2rem 0 1rem 0' : ''};

  @media (min-width: ${(props) => props.theme.md}px) {
    margin: ${props => props.marginBottom ? '0 0 1.2rem 0' : ''};
  }

  // icon
  justify-content: ${props => props.icon ? 'flex-start' : ''};
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

const Listing = ({ listing }) => {
  const {
    imgs, addr, price, user, desc, sold, displayName, displayEmail, cornellOnly, totalRooms, availRooms, bathrooms, type, toCampus
  } = listing;

  const signedInUser = useSelector((state) => state.user);
  let mergedAmenities = publicAmenities.concat(amenities.filter((amenity) => listing.amenities.includes(amenity.value)));
  mergedAmenities[0].count = availRooms;
  mergedAmenities[1].count = bathrooms;

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
                <Row marginBottom>
                  <Heading>{totalRooms}-Bedroom {type.charAt(0).toUpperCase() + type.slice(1)}</Heading>
                  <BmBtn listing={listing} />
                </Row>
                <Row icon>
                  <SVGContainer><PlaceSVG /></SVGContainer>
                  <Body muted sm>{addr}</Body>
                </Row>
                <Row icon>
                  <SVGContainer><CalendarSVG /></SVGContainer>
                  <Body muted sm>{getDateString(listing)}</Body>
                </Row>
                <Row icon>
                  <SVGContainer><WalkSVG /></SVGContainer>
                  <Body muted sm>{toCampus} km to campus</Body>
                </Row>
              </Section>
              <Section>
                <Row marginBottom><Subheading bold>Description</Subheading></Row>
                <Row>
                  <Body lineHeight={1.5}>{desc}</Body>
                </Row>
                <Row>
                  <AmenitiesList>
                    {mergedAmenities.map((amenity) => (
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
              <Section>
                <Row marginBottom><Subheading bold>Contact</Subheading></Row>
                {sold  
                  ? <Row><Badge color='primary' inverted>Sold</Badge></Row>
                  :(
                    <Row>
                      {(!cornellOnly || cornellOnly && signedInUser && signedInUser.email.split('@')[1] === 'cornell.edu')
                        ? (
                            <DetailedAvatar
                              name={displayName || user.name}
                              email={displayEmail || user.email}
                              src={displayName ? undefined : user.photo}
                            />
                          )
                        : (
                          <LockSection>
                            <LockAvatar>
                              <LockSVG />
                            </LockAvatar>
                            <TextSection>
                              <Subheading bold>Restricted to Cornell</Subheading>
                              <Body muted>Sign in with a @cornell.edu account to view contact details</Body>
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
    </div>
  );
};

export default Listing;
