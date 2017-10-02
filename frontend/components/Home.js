import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'


const Home = () => (
  <div className="container">
      <Jumbotron>
        <h1>Volunteer</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>
          <Button bsStyle="primary" bsSize="large">
            Log In
          </Button>
        </p>
      </Jumbotron>
  </div>
);

export default Home;
