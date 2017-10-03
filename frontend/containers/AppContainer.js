import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.css';
import createHistory from 'history/createBrowserHistory'

const handleClick = () => {
    console.log(localStorage);
}

const AppContainer = (props) => {
    let history = createHistory();

    return (
        <Router history={history}>
            <App history={history}/>
        </Router>
    );
};

const mapStateToProps = (state) => {
  return {
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
