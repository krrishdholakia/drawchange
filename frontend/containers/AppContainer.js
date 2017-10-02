import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import history from './history'
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.css';
import createHistory from 'history/createBrowserHistory'

const AppContainer = () => {
  return (
      <Router history={createHistory()}>
          <App />
      </Router>
  );
};

AppContainer.propTypes = {
  name: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
