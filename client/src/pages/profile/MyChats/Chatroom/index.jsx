import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import RenderOn from 'src/containers/RenderOn';
import ChatroomList from '../ChatroomList';
import ChatroomPanel from '../ChatroomPanel';

const Container = styled.div`
  display: flex;
`;

const Chatroom = ({ match }) => {

  return (
    <div>
      <MainHeader />
      <RenderOn desktop>
        <Navbar />
      </RenderOn>
      <Container>
        <RenderOn desktop>
          <ChatroomList />
        </RenderOn>
        <ChatroomPanel cid={match.params.cid} />
      </Container>
    </div>
  )
};

export default Chatroom;
