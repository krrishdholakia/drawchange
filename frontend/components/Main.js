import React from 'react'
import NavBar from './NavBar'

const Main = ({children}) => (
  <div className="container d-flex flex-column col-md-6">
    <div style={{height: 50 +'px'}}/>
    {children}
  </div>
)

export default Main;
