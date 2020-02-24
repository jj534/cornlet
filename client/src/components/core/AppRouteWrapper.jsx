import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'src/pages/home';
import Listing from 'src/pages/listing';
import New from 'src/pages/new';
import Profile from 'src/pages/profile';
import Edit from 'src/pages/edit';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/listing/:id/edit" component={Edit} />
        <Route exact path="/listing/:id" component={Listing} />
        <Route exact path="/new" component={New} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default AppRouter;
