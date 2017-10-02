import React, { Component } from 'react';
import { Route } from 'react-router'
import { Navbar, Button, Nav, NavItem} from 'react-bootstrap';
import Home from './Home'

const App  = () => (
    <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Drawchange</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav/>
        </Navbar>
        <Route path='/home' component={Home}/>
    </div>
)

export default App;
