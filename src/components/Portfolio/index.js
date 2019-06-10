import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from 'src/components/Header';
import Banner from 'src/components/Banner';
import Sidebar from 'src/components/Sidebar';

import routes from 'src/data/routes';

import './portfolio.scss';

const Portfolio = ({ location, history }) => {
  const [navOpen, setNavOpen] = useState(false);

  const changeTitle = ({ pathname }) => {
    document.title = routes[pathname].title;
  };

  const listenRoutes = () => {
    changeTitle(location);
    history.listen(changeTitle);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(listenRoutes, []);

  return (
    <div id="portfolio" className={classNames({ navOpen })}>
      <div id="sidebar-toggle" onClick={toggleNav}>
        ||
      </div>
      <Sidebar routes={routes} toggleSidebar={toggleNav} />
      <main id="main">
        <Header routes={routes} />
        <div className="container">
          <Switch>
            {Object.keys(routes).map(route => (
              <Route exact key={route} path={route} component={routes[route].component} />
            ))}
          </Switch>
          <Banner />
        </div>
      </main>
    </div>
  );
};

Portfolio.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Portfolio);
