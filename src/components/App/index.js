import React from 'react';
import PropTypes from 'prop-types';
import withMobile from 'src/hoc/withMobile';

const App = ({ mobile }) => (
  <div id="app">
    {mobile && 'Mobile'}
    {!mobile && 'Ordi'}
  </div>
);

App.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default withMobile(App, 800);

// HOC : withRouter(Container)
// Render prop : <Route render={() => <Container />} />
