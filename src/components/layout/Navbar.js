import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
      <h1>
          <Link to='/'>
            <i className="fas fa-code"/> Dev Connecter
          </Link>
        </h1>
        <ul>
        <li>
            <Link to="/oter">Developers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;
