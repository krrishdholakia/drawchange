import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { makeMainRoutes } from '../components/Routes';
// import 'bootstrap/dist/css/bootstrap.css';
import Events from './Events.js';
import SurveyRead from './SurveyRead.js';

const AppContainer = () => {
  return (
      <BrowserRouter>
        {/* <Events/> */}
        <SurveyRead questions={[
          {
            type: "checkbox",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          },
          {
            type: "checkbox",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          },
          {
            type: "checkbox",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          },
          {
            type: "checkbox",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          }
        ]}/>
      </BrowserRouter>
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