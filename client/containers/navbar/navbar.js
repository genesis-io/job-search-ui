import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navbar.scss';
import '../../styles/_components.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="nav">
        <div>
          Job Search
        </div>
        <div>
          <button className="transparent-button">Login</button>
          <button className="cta-button">Signup</button>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);

