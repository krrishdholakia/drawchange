// import React from 'react';

/* the user has to be able to create the necessary forms. Until API is ready, clicking on the done button will
open SurveyRead.js which will display sample text answers. This shall be improved in v2*/

/*
Structure of Survey Creation page:

1) Box:
    - Admin chooses question type:
2) Box:
    - Question to be asked
    - If question type is of grid-type,scale-type,checkbox-type, list-type
      the necessary box will be displayed requiring admin input
3) Admin will be asked to save or add new questions,
    - IF add questions:
        - the previous question will be displayed on page as a static box with an edit button
        - box-box-question structure will be repeated


//for v2. : save questions to local storage. when submitted to db clear local-storage. this allows some form of auto-save
*/

// NPM Packages
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Col, Row, Panel, Button } from 'react-bootstrap';

// Local Imports
import NewQuestion from '../components/NewQuestion';
import DisplayQuestion from '../components/DisplayQuestion';
import SurveyConduct from './SurveyConduct';


class SurveyCreate extends Component {
  constructor(props) {
    super(props);
    this.questionArr = [];
    this.state = {
      type: '',
      name: '',
      choices: '',
      questions: []
    };
    this.surveyResponse = this.surveyResponse.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateChoices = this.updateChoices.bind(this);
    this.updateType = this.updateType.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.saveSurvey = this.saveSurvey.bind(this);
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }
  updateChoices(e) {
    this.setState({choices: e.target.value});
  }
  updateType(e) {
    this.setState({type: e.target.value});
  }

  addQuestion() {
    const questions = this.state.questions.slice();
    questions.push({
      name: this.state.name,
      type: this.state.type,
      message: this.state.name,
      choices: this.state.choices
    });
    this.setState({questions, name: '', choices: '', type: ''});
  }

  saveSurvey() {
    const questions = this.state.questions.map(question => {
      question.choices = question.choices !== '' ? question.choices.split(',') : null;
      question.when = true;
      question.previous = null;
      return question;
    });

    const survey = {
      questions,
      assignees: [],
      uploader: this.props.uploader
    };
    this.props.createNewSurvey(survey);
  }

  surveyResponse() {
    // this.context.router.push({
    //   pathname: '/SurveyConduct',
    //   state: {email: this.state.email}
    // });
    alert('jello');
  }

  render() {
    return (
      <Row>
        <Col lg={6} lgOffset={3}>
          <Panel header={<h3>Create New Survey</h3>}>
            <form>
              <NewQuestion
                type={this.state.type}
                name={this.state.name}
                choices={this.state.choices}
                updateType={this.updateType}
                updateName={this.updateName}
                updateChoices={this.updateChoices}
                addQuestion={this.addQuestion}/>

              <Panel header={<h3>Questions</h3>}>
                {this.state.questions.length === 0
                  ? <p>Questions added to survey will appear here...</p>
                  : this.state.questions.map((question, index) => (
                      <DisplayQuestion
                        key={index}
                        question={question}
                        index={index}
                      />
                ))}
              </Panel>


              <Button bsStyle="primary" onClick={this.saveSurvey}> Save Survey </Button>
              <Button bsStyle="primary" onClick={() => {this.surveyResponse();}}> Move On </Button>
            </form>
          </Panel>

        </Col>
      </Row>
    );
  }
}

SurveyCreate.propTypes = {
  uploader: PropTypes.string,
  createNewSurvey: PropTypes.func
};

// const mapStateToProps = (state) => {
//   return {
//     uploader: state.auth.user._id
//   };
// // };

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch);
// }

export default SurveyCreate;

