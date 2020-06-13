import React from 'react';
import styled from 'styled-components';
import MainHeader from 'src/components/headers/MainHeader';
import Navbar from 'src/components/headers/Navbar';
import RenderOn from 'src/containers/RenderOn';
import ChatroomList from '../ChatroomList';
import ChatroomPanel from '../ChatroomPanel';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Chatroom = ({ match }) => (
  <Container>
    <MainHeader />
    <RenderOn desktop>
      <Navbar />
    </RenderOn>
    <Content>
      <RenderOn desktop>
        <ChatroomList />
      </RenderOn>
      <ChatroomPanel cid={match.params.cid} />
    </Content>
  </Container>
);

export default Chatroom;
