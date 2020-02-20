import React from 'react';
import styled from 'styled-components';
import BackHeader from 'src/components/headers/BackHeader';
import Badge from 'src/components/displays/Badge';
import DetailedAvatar from 'src/components/displays/DetailedAvatar';
import Body from 'src/components/fonts/Body';

const Container = styled.div`

`;

const Placeholder = styled.div`
  width: 100%:
  padding-bottom: 100%:
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  padding-bottom: 100%:
`

const Content = styled.div`

`

const Section = styled.div`
  margin: 1rem 0 2.5rem 0;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin: .2rem 0;
`

const Addr = styled.h2`
  font-size: 1.2rem;
`

const Price = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
`

const Listing = ({ listing }) => {
  const { imgs, addr, price, user, term, desc } = listing;
  return (
    <Container>
      <BackHeader />
      <Placeholder>
        <Img src={imgs[0]} />
      </Placeholder>
      <Content>
        <Section>
          <Row>
            <Addr>{addr}</Addr>
            <Price>{`$${price}`}</Price>
          </Row>
          <Row>
            <Badge
              color='primary'
              size='sm'
              inverted
            >{term}</Badge>
          </Row>
        </Section>
        <Section>
          <Row>
            <DetailedAvatar
              name={user.name}
              email={user.email}
              src={user.photo}
            />
          </Row>
        </Section>
        <Section>
          <Row>
            <Body>{desc}</Body>
          </Row>
        </Section>
      </Content>
    </Container>
  )
};

export default Listing;
