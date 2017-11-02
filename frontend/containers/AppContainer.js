import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { makeMainRoutes } from '../components/Routes';
// import 'bootstrap/dist/css/bootstrap.css';
import Events from './Events.js';
import SurveyRead from './SurveyRead.js';
import SurveyCreate from './SurveyCreate.js';
const AppContainer = () => {
  return (
      <BrowserRouter>
        {/* <Events/> */}
        <SurveyCreate/>
        {/* <SurveyRead questions={[
          {
            type: "checkbox-type",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          },
          {
            type: "text-type",
            text: "asdf",
            choices: null,
            answer: "chekc"
          },
          {
            type: "list-type",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "s5df"
          },
          {
            type: "checkbox-type",
            text: "asdf",
            choices: ["sdfd", "sdf", "sdfe"],
            answer: "sdf"
          }
        ]}/> */}
      </BrowserRouter>
=======
import Title from '../components/Title';

const AppContainer = ({ name }) => {
  return (
        <div>
            <Title name={name} />
        </div>
>>>>>>> master
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