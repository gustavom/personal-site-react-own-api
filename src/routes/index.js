import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import About from '../pages/About';
import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import ProjectsAdd from '../pages/ProjectsAdd';
import ProjectsEdit from '../pages/ProjectsEdit';
import ProjectsList from '../pages/ProjectsList';
import ProjectPage from '../pages/ProjectPage';
import ProjectsListPage from '../pages/ProjectsListPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isHome />
      <Route path="/login" exact component={SignIn} />
      {/* <Route path="/register" component={SignUp} /> */}
      <Route path="/projects" component={ProjectsListPage} isProjectPage />
      <Route path="/about" component={About} isSamplePage />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/projetos-list" component={ProjectsList} isPrivate />
      <Route path="/project/new" exact component={ProjectsAdd} isPrivate />
      <Route path="/project/:id/edit" component={ProjectsEdit} isPrivate />

      <Route path="/project/:slug" component={ProjectPage} isProjectPage />
    </Switch>
  );
}
