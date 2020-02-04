import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';
import HomeLayout from '~/pages/_layouts/home';
import SampleLayout from '~/pages/_layouts/sample';
import ProjectPageLayout from '~/pages/_layouts/projectPage';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isHome,
  isSamplePage,
  isProjectPage,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    alert(' not sign and is private');
    return <Redirect to="/" />;
  }

  // if (signed && !isPrivate) {
  //   alert('sign and is not private');
  //   return <Redirect to="/dashboard" />;
  // }

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (isHome) {
    const LayoutTemplate = HomeLayout;
    return (
      <Route
        {...rest}
        render={props => (
          <LayoutTemplate>
            <Component {...props} />
          </LayoutTemplate>
        )}
      />
    );
  } else if (isSamplePage) {
    const LayoutTemplate = SampleLayout;
    return (
      <Route
        {...rest}
        render={props => (
          <LayoutTemplate>
            <Component {...props} />
          </LayoutTemplate>
        )}
      />
    );
  } else if (isProjectPage) {
    const LayoutTemplate = ProjectPageLayout;
    return (
      <Route
        {...rest}
        render={props => (
          <LayoutTemplate>
            <Component {...props} />
          </LayoutTemplate>
        )}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
