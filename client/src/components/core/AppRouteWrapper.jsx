import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import Edit from 'src/pages/edit';
import Env from 'src/pages/env';
import PrivacyPolicy from 'src/pages/privacy-policy';
import CookiePolicy from 'src/pages/cookie-policy';
import TermsConditions from 'src/pages/terms-conditions';

import Profile from 'src/pages/profile';
import MyListings from 'src/pages/profile/MyListings';
import Chat from 'src/pages/profile/MyChats/Chat';
import Chatroom from 'src/pages/profile/MyChats/Chatroom';
import Settings from 'src/pages/profile/Settings';
import ScrollToTop from './ScrollToTop';
import PrivateRoute from './PrivateRoute';
import MainFooter from '../footers/MainFooter';
import SocketIO from './SocketIO';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/listing/:id/edit" component={Edit} />
      <Route exact path="/listing/:id" component={Listing} />
      <Route exact path="/env" component={Env} />
      <Route exact path="/new" component={New} />
      <Route exact path="/terms-conditions" component={TermsConditions} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/cookie-policy" component={CookiePolicy} />
      <PrivateRoute exact path="/profile/settings" component={Settings} />
      <PrivateRoute exact path="/profile/chat/:cid" component={Chatroom} />
      <PrivateRoute exact path="/profile/chat" component={Chat} />
      <PrivateRoute exact path="/profile/listings" component={MyListings} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
    <ScrollToTop />
    <SocketIO />
    <MainFooter />
  </BrowserRouter>
);

export default AppRouter;
