import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Login from './Login'
import Registration from './Registration';
import Dashboard from './Dashboard';

export default class App extends Component{
    constructor(props) {
        super(props);
        this._renderRoot = this._renderRoot.bind(this);
        this._renderLogin = this._renderLogin.bind(this);
        this._renderRegistration = this._renderRegistration.bind(this);
        this._renderDashboard = this._renderDashboard.bind(this);
    }

    loggedIn() {
        let currentTime = new Date().getTime();
        let expireTime = JSON.parse(localStorage.getItem('expireAt'));
        return currentTime < expireTime;
    }

    _renderRoot() {
        return this.loggedIn()
        ? <Redirect to='/dashboard'/>
        : <Redirect to='/login'/>
    }
    _renderDashboard() {
        return this.loggedIn()
        ? <Dashboard/>
        : <Redirect to='/login'/>
    }

    _renderRegistration() {
        return <Registration history={this.props.history}/>
    }

    _renderLogin() {
        return this.loggedIn()
        ? <Redirect to='/dashboard'/>
        : <Login history={this.props.history}/>
    }

    render() {
        return (
            <div>
                <Navbar fluid>
                  <Navbar.Header>
                    <Navbar.Brand>
                      <Link to="/">Drawchange</Link>
                    </Navbar.Brand>
                  </Navbar.Header>
                </Navbar>

                <Route exact path='/' render={this._renderRoot}/>
                <Route path='/dashboard' render={this._renderDashboard}/>
                <Route path='/registration' render={this._renderRegistration}/>
                <Route path='/login' render={this._renderLogin}/>

            </div>

        )
    }
}
