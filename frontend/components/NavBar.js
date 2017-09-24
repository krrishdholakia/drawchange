import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">drawchange</Link>
    {/* <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/volunteer">volunteer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">admin</Link>
      </li>
    </ul> */}
  </nav>
);

export default NavBar;
