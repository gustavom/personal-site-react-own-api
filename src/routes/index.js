import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ProjectsAdd from '../pages/ProjectsAdd';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isHome />
      <Route path="/login" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/project/new" component={ProjectsAdd} isPrivate />
    </Switch>
  );
}
