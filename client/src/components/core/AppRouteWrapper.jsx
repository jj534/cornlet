import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import Profile from 'src/pages/profile';
import Edit from 'src/pages/edit';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 101vh;
    background-color: rgba(0, 0, 0, .05);
`;

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Container>
        <Switch>
          <Route exact path="/listing/:id/edit" component={Edit} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/new" component={New} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Container>
  </BrowserRouter>
  )
};

export default AppRouter;
