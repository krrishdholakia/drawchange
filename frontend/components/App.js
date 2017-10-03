import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Login from './Login'
import Registration from './Registration';
import Dashboard from './Dashboard';

const App  = ({currentUser, history}) => (
    <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Drawchange</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Route exact path='/' render={() => (
            currentUser ? (
                <Redirect to='/dashboard'/>
            ) : (
                <Redirect to='/login'/>
            )
        )}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' render={() =>
            <Login history={history}/>
        }/>
        <Route path='/registration' render={() =>
            <Registration history={history}/>
        }/>
    </div>
)

export default App;
