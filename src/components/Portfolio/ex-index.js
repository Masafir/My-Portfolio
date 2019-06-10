import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, withRouter } from 'react-router-dom';


import Header from 'src/components/Header';
import Banner from 'src/components/Banner';
import Home from 'src/components/Home';
import Work from 'src/components/Work';
import Contact from 'src/components/Contact';

import Sidebar from 'src/components/Sidebar';


import './portfolio.scss';


const routes = {
  '/': {
    title: 'Squiddy koder',
    subtitle: 'Poulpe codeur depuis 7 générations',
    nav: 'Home',
    component: Home,
  },
  '/work': {
    title: 'Mes projets, mes passions',
    subtitle: 'Ma vie de poulpe, on jette l\'e- ancre ?',
    nav: 'Work',
    component: Work,
  },
  '/contact': {
    title: 'Contactez le Lave Codeur',
    subtitle: 'Tu m\'accuses sans pieuvres là ?!',
    nav: 'Contact',
    component: Contact,
  },
};

class Portfolio extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  state ={
    navOpen: false,
  }

  componentDidMount() {
    this.listenRoutes();
  }

  listenRoutes = () => {
    const { location, history } = this.props;
    // Au chargement de la page, on modifie le title
    this.changeTitle(location);
    // Écouter le changement de route
    // => Objectif : changer le title de la page
    history.listen(this.changeTitle);
  }

  changeTitle = ({ pathname }) => {
    console.log('changement de route', pathname);
    // Récup depuis l'objet routes
    const newTitle = routes[pathname].title;
    // Modifier le title de la page
    document.title = newTitle;
  }

  toggleSidebar = () => {
    const { navOpen } = this.state;

    this.setState({
      navOpen: !navOpen,
    });
  }

  render() {
    const { navOpen } = this.state;
    const classCSS = classNames({ navOpen });

    return (
      <div id="portfolio" className={classCSS}>
        <div id="sidebar-toggle" onClick={this.toggleSidebar}>||</div>
        <Sidebar routes={routes} />
        <main id="main">
          <Header routes={routes} />
          <div className="container">
            <Switch>
              {Object.keys(routes).map(route => (
                <Route
                  exact
                  path={route}
                  key={route}
                  component={routes[route].component}
                />
              ))}
            </Switch>
            <Banner />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Portfolio);
