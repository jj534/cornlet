import React from 'react';
import styled from 'styled-components';
import BackHeader from 'src/components/headers/BackHeader';
import ImgCarousel from 'src/components/displays/ImgCarousel';
import DetailedAvatar from 'src/components/displays/DetailedAvatar';
import Body from 'src/components/fonts/Body';
import StateBadges from 'src/components/displays/StateBadges';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  @media (min-width: ${props => props.theme.md}px) {
    max-width: 800px;
  }
`;

const ImgInnerContainer = styled.div`
  width: 100vw;
  
  @media (min-width: ${props => props.theme.md}px) {
    width: 800px;
  }
`

const Content = styled.div`
  margin-top: 2rem;
`

const Section = styled.div`
  margin: 1rem 0 2.5rem 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin: .2rem 0;
  
  @media (min-width: ${props => props.theme.md}px) {
    margin: .5rem 0;
  }
`

const Addr = styled.h2`
  font-size: 1.2rem;
  
  @media (min-width: ${props => props.theme.md}px) {
    font-weight: bold;
    font-size: 1.5rem;
  }
`

const Price = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
`

const Listing = ({ listing }) => {
  const { imgs, addr, price, user, desc, sold } = listing;
  return (
    <Wrapper>
    <Container>
      <BackHeader fullwidth />
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
            <StateBadges
              listing={listing}
            />
          </Row>
        </Section>
        {!sold && (
          <Section>
            <Row>
              <DetailedAvatar
                name={user.name}
                email={user.email}
                src={user.photo}
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
    </Container>
    </Wrapper>
  )
};

export default Listing;
