import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import Edit from 'src/pages/edit';

import Profile from 'src/pages/profile';
import MyListings from 'src/pages/profile/MyListings';
import MyChats from 'src/pages/profile/MyChats';
import Settings from 'src/pages/profile/Settings';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/listing/:id/edit" component={Edit} />
      <Route exact path="/listing/:id" component={Listing} />
      <Route exact path="/new" component={New} />
      <Route exact path="/profile/settings" component={Settings} />
      <Route exact path="/profile/chat" component={MyChats} />
      <Route exact path="/profile/listings" component={MyListings} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
