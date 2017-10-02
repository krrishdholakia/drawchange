import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Login from '../containers/Login'
import Main from './Main'
import Registration from '../containers/Registration'
import Dashboard from  './Dashboard'

const App = ({children}) => (
  <div>
    <NavBar/>
    <Main>
    	<Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/admin" component={Main}/>
        </Switch>
    </Main>
  </div>
)

export default App;
