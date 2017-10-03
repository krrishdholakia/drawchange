import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Col, Jumbotron, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';

const Login = ({history}) => (
    <Grid>
        <Col md={2}/>
        <Col md={8}>
            <Jumbotron>
                <h1>Volunteer</h1>
                <p>
                    Don't have an account?
                    <Link to="/registration"> Sign Up </Link>
                </p>
              <LoginModal history={history}/>
          </Jumbotron>
        </Col>
        <Col md={2}/>
    </Grid>
);

export default Login;
