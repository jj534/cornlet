import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Btn from 'src/components/buttons/Btn';
import signOut from 'src/services/firebase/signOut';
import { useHistory, Link } from 'react-router-dom';
import BackHeader from 'src/components/headers/BackHeader';
import Heading from 'src/components/fonts/Heading';
import Body from 'src/components/fonts/Body';
import DynContainer from 'src/components/views/DynContainer';
import MyListings from './MyListings';

const Container = styled.div`

`;

const Section = styled.div`
  margin: 1rem 0 3rem 0;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem 0;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Profile = ({ user }) => {
  const history = useHistory();
  const handleSignOut = async () => {
    await signOut();
    history.push('/')
  }
  
  // conditionally render body text
  const defaultText = 'Create a new listing to get started';
  const hasListingsText = 'Click on your listing to make edits';
  const [hasListings, setHasListings] = useState(false);
  const [text, setText] = useState(defaultText);
  useEffect(() => {
    if (hasListings) setText(hasListingsText);
    else setText(defaultText);
  }, [hasListings])
  
  return (
    <Container>
      <BackHeader />
      <DynContainer>
        <Section>
          <Row>
            <Heading>{`Hi, ${user.displayName}`}</Heading>
            <Link to='/new'>
              <Btn
                color='primary'
                inverted
              >new</Btn>
            </Link>
          </Row>
          <Body>{text}</Body>
        </Section>
        <MyListings
          uid={user.uid}
          setHasListings={setHasListings}
        />
        <Center>
          <Btn
            color='primary'
            type='button'
            onClick={handleSignOut}
          >Sign Out</Btn>
        </Center>
      </DynContainer>
    </Container>
  )
};

export default Profile;
