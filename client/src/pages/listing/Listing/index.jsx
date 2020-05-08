import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import BackHeader from 'src/components/headers/BackHeader';
import ImgCarousel from 'src/components/displays/ImgCarousel';
import DetailedAvatar from 'src/components/displays/DetailedAvatar';
import Body from 'src/components/fonts/Body';
import getDateString from 'src/util/helpers/getDateString';
import RenderOn from 'src/containers/RenderOn';
import Badge from 'src/components/displays/Badge';
import BmBtn from 'src/components/buttons/BmBtn';
import { useSelector } from 'react-redux';
import { ReactComponent as LockRaw } from 'src/assets/svgs/lock.svg';

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
  
  // meta
  justify-content: ${props => props.meta ? 'flex-start' : ''};
  & > * {
    margin-right: ${props => props.meta ? '.5rem' : ''};
  }
`;

const Addr = styled.h2`
  font-size: 1.2rem;

  @media (min-width: ${(props) => props.theme.md}px) {
    font-weight: bold;
  }

`;

const LockSVG = styled(LockRaw)`
  height: 1rem;
  margin-right: .5rem;
  opacity: .7;
`

const LockSection = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
`;

const Listing = ({ listing }) => {
  const {
    imgs, addr, price, user, desc, sold, displayName, displayEmail,
  } = listing;

  const viewingUser = useSelector((state) => state.user);

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
            </ImgInnerContainer>
            <Content>
              <Section>
                <Row>
                  <Addr>{addr}</Addr>
                  <Price>{`$${price}`}</Price>
                </Row>
                <Row meta>
                  <Body muted sm>{getDateString(listing)}</Body>
                </Row>
              </Section>
              <Section>
                {sold  
                  ? <Row><Badge color='primary' inverted>Sold</Badge></Row>
                  :(
                    <Row>
                      {viewingUser
                      ? (
                          <DetailedAvatar
                            name={displayName || user.name}
                            email={displayEmail || user.email}
                            src={displayName ? undefined : user.photo}
                          />
                        )
                      : (
                        <LockSection>
                          <LockSVG />
                          <Body muted>Sign in to view contact details</Body>
                        </LockSection>
                        )
                      }
                      <BmBtn listing={listing} />
                    </Row>
                  )
                }
              </Section>
              <Section>
                <Row>
                  <Body>{desc}</Body>
                </Row>
              </Section>
            </Content>
          </ListingSection>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Listing;
