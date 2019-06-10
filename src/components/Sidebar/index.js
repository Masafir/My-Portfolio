import React from 'react';
import PropTypes from 'prop-types';

import './sidebar.scss';

import StyledLink from './StyledLink';

const Sidebar = ({ routes, toggleSidebar }) => (
  <div id="sidebar">
    <div className="sidebar-item">
      <p>
        Bonjour, voici mon PortFolio en ligne. Vous pouvez checker la {' '}
        <a href="" className="external-link">
          source sur GitHub
        </a>
      </p>
    </div>

    <nav className="sidebar-nav">
      {Object.keys(routes).map(route => (
        <StyledLink
          exact
          key={route}
          to={route}
          className="sidebar-nav-link"
          onClick={toggleSidebar}
        >
          {routes[route].nav}
        </StyledLink>
      ))}
    </nav>
    <div className="sidebar-item">
      <p>
        Mon {' '}
        <a href="https://twitter.com/ami_lack" className="external-link">
          Twitter
        </a>
      </p>
      <p>
        Mon {' '}
        <a href="https://www.linkedin.com/in/amir-lachemet/" className="external-link">
          Linkedin
        </a>
      </p>
      <p>
        Mon {' '}
        <a href="https://github.com/Masafir" className="external-link">
          GitHub
        </a>
      </p>
    </div>
  </div>
);

Sidebar.propTypes = {
  routes: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
