import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.scss';
import '../../styles/_components.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="link-home transparent-button">
          Job Search
        </Link>
        <div className="link-container">
          <Link to="/signup" className="cta-button">Signup</Link>
          <Link to="/login" className="transparent-button">Login</Link>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);

