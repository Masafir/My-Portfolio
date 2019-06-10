/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Local import
 */
import Portfolio from 'src/components/Portfolio';

/**
 * Code
 */
const rootComponent = (
  <Router>
    <Portfolio />
  </Router>
);

render(rootComponent, document.getElementById('root'));
