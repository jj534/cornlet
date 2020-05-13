import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import Edit from 'src/pages/edit';
import Env from 'src/pages/env';

import Profile from 'src/pages/profile';
import MyListings from 'src/pages/profile/MyListings';
import MyBookmarks from 'src/pages/profile/MyBookmarks';
import Settings from 'src/pages/profile/Settings';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/listing/:id/edit" component={Edit} />
      <Route exact path="/listing/:id" component={Listing} />
      <Route exact path="/env" component={Env} />
      <Route exact path="/new" component={New} />
      <Route exact path="/profile/settings" component={Settings} />
      <Route exact path="/profile/bookmarks" component={MyBookmarks} />
      <Route exact path="/profile/listings" component={MyListings} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
    <ScrollToTop />
  </BrowserRouter>
);

export default AppRouter;
