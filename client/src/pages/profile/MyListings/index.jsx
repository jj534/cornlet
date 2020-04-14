import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import { Link } from 'react-router-dom';
import Heading from 'src/components/fonts/Heading';
import Body from 'src/components/fonts/Body';
import Listings from './Listings';
import { useSelector } from 'react-redux';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';

const Container = styled.div`

`;

const Section = styled.div`
  margin: 1rem 0 3rem 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem 0;
`;

const MyListings = () => {
  const user = useSelector((state) => state.user);

  // conditionally render body text
  const defaultText = 'Create a new listing to get started';
  const hasListingsText = 'Update your listing to improve its sort rating';
  const [hasListings, setHasListings] = useState(false);
  const [text, setText] = useState(defaultText);
  useEffect(() => {
    if (hasListings) setText(hasListingsText);
    else setText(defaultText);
  }, [hasListings]);

  return (
    <Container>
      <MainHeader />
      <Navbar />
      <Section>
        <Row>
          <Heading>{`Hi, ${user.displayName.split(' ')[0]}`}</Heading>
          <Link to="/new">
            <Btn
              color="primary"
              inverted
            >
new
            </Btn>
          </Link>
        </Row>
        <Body>{text}</Body>
      </Section>
      <Listings
        uid={user.uid}
        setHasListings={setHasListings}
      />
    </Container>
  );
};

export default MyListings;
