import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navbar.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="nav">
        <button>Login</button>
        <button>Signup</button>
      </nav>
    );
  }
}

export default connect()(NavBar);

