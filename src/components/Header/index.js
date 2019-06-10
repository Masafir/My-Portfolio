import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './header.scss';

const Header = ({ routes }) => (
  <header id="header">
    {Object.keys(routes).map(path => (
      <Route
        exact
        path={path}
        key={path}
        render={() => (
          <h1 id="header-title">
            <a href="/">{routes[path].title}</a>
            <small>{routes[path].subtitle}</small>
          </h1>
        )}
      />
    ))}
  </header>
);

Header.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default Header;
