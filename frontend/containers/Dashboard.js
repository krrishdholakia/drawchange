// NPM Packages
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row, Panel, Nav, NavItem } from 'react-bootstrap';
// Local Imports
import '../assets/stylesheets/ItemDisplay.css';
import * as dashboardActions from '../actions/dashboard.js';
import * as eventActions from '../actions/events.js';
import * as volunteerActions from '../actions/volunteers.js';
import PendingVolunteers from '../components/tables/PendingVolunteers';
import UpcomingEvents from '../components/tables/UpcomingEvents';
import NewVolunteers from '../components/tables/NewVolunteers';
import { PENDING_VOLUNTEERS_FULL } from '../components/tables/columns';


class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.onLoad();
  }

  // #c4e3f3
  // background-color: #a8dfff91;
  // color: black;


  render() {
    return (
      <div>
        <Row>
          <Col smOffset={1} lgOffset={2} lg={4} sm={5}>
            <h1>Welcome, Andre</h1>
          </Col>
          <Col sm={5} lg={4}>
            <Nav pullRight style={{marginTop: '20px', marginBottom: '10px', fontSize: 'initial'}} bsStyle="pills"  onSelect={key => alert(`clicked ${key}`)}>
              <NavItem eventKey={1}>+ New Event</NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} lgOffset={2} lg={8} sm={10}>
            <Panel header={<h3>Pending Volunteers</h3>} bsStyle="info">
              <PendingVolunteers data={this.props.pending} columns={PENDING_VOLUNTEERS_FULL} updateVolunteer={this.props.updateCurrentVolunteer}/>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col smOffset={1} lgOffset={2} lg={4} sm={5}>
            <Panel header={<h3>New Volunteers</h3>} bsStyle="info">
              <NewVolunteers data={this.props.newest} updateVolunteer={this.props.updateCurrentVolunteer}/>
            </Panel>
          </Col>
          <Col sm={5} lg={4}>
            <Panel header={<h3>Upcoming Events</h3>} bsStyle="info">
              <UpcomingEvents data={this.props.upcoming} updateEvent={this.props.updateCurrentEvent}/>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  onLoadEvent: PropTypes.func,
  itemList: PropTypes.array,
  currentEvent: PropTypes.string,
  events: PropTypes.object,
  updateCurrentEvent: PropTypes.func,
  volunteers: PropTypes.array,
  eventMode: PropTypes.string,
  currentVolunteer: PropTypes.string,
  eventList: PropTypes.array,
  onCreateEvent: PropTypes.func,
  createEvent: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    pending: state.volunteers.pending,
    newest: state.volunteers.newest,
    upcoming: state.events.newest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return Object.assign({},
    bindActionCreators(dashboardActions, dispatch),
    bindActionCreators(eventActions, dispatch),
    bindActionCreators(volunteerActions, dispatch),
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);