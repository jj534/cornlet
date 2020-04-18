import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import BackHeader from 'src/components/headers/BackHeader';
import ImgCarousel from 'src/components/displays/ImgCarousel';
import DetailedAvatar from 'src/components/displays/DetailedAvatar';
import Body from 'src/components/fonts/Body';
import getDateString from 'src/util/helpers/getDateString';
import RenderOn from 'src/containers/RenderOn';

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
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  @media (min-width: ${(props) => props.theme.md}px) {
    width: 800px;
    margin-right: 2rem;
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
  padding: 0 1rem;
  margin: .2rem 0;
  
  @media (min-width: ${(props) => props.theme.md}px) {
    margin: 0 0 .5rem 0;
  }
`;

const Addr = styled.h2`
  font-size: 1.2rem;

  @media (min-width: ${(props) => props.theme.md}px) {
    font-weight: bold;
  }

`;

const Price = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
`;

const Listing = ({ listing }) => {
  const {
    imgs, addr, price, user, desc, sold, displayName, displayEmail,
  } = listing;

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
                <Row>
                  <Body muted sm>{getDateString(listing)}</Body>
                </Row>
              </Section>
              {!sold && (
              <Section>
                <Row>
                  <DetailedAvatar
                    name={displayName || user.name}
                    email={displayEmail || user.email}
                    src={displayName ? undefined : user.photo}
                  />
                </Row>
              </Section>
              )}
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
