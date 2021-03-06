import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthCallback from 'src/pages/auth-callback';
import CookiePolicy from 'src/pages/cookie-policy';
import Edit from 'src/pages/edit';
import Env from 'src/pages/env';
import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import PrivacyPolicy from 'src/pages/privacy-policy';
import Profile from 'src/pages/profile';
import MyBookmarks from 'src/pages/profile/MyBookmarks';
import Chat from 'src/pages/profile/MyChats/Chat';
import Chatroom from 'src/pages/profile/MyChats/Chatroom';
import MyListings from 'src/pages/profile/MyListings';
import Settings from 'src/pages/profile/Settings';
import TermsConditions from 'src/pages/terms-conditions';
import MainFooter from '../footers/MainFooter';
import PrivateRoute from './PrivateRoute';
import ResetUserStore from './ResetUserStore';
import ScrollToTop from './ScrollToTop';
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
      <Route exact path="/auth/callback" component={AuthCallback} />
      <PrivateRoute exact path="/profile/settings" component={Settings} />
      <PrivateRoute exact path="/profile/chat/:cid" component={Chatroom} />
      <PrivateRoute exact path="/profile/bookmarks" component={MyBookmarks} />
      <PrivateRoute exact path="/profile/chat" component={Chat} />
      <PrivateRoute exact path="/profile/listings" component={MyListings} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
    <ResetUserStore />
    <ScrollToTop />
    <SocketIO />
    <MainFooter />
  </BrowserRouter>
);

export default AppRouter;
