import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './navbar.scss';
import '../../styles/_components.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      dropDown: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    const { dropDown } = this.state;
    this.setState({ dropDown: !dropDown });
  }

  render() {
    const { dropDown } = this.state;

    const dropDownclasses = cx(styles.base, {
      dropdown: true,
      fa: true,
      'fa-2x': true,
      'fa-close': dropDown,
      'fa-bars': !dropDown,
    });

    const menuClasses = cx(styles.base, {
      'nav-link-holder': true,
      'show-flex-display': dropDown,
    });

    return (
      <nav className="nav">
        <div className="link-home-container">
          <Link to="/" className="link-home transparent-button">
            Job Search
          </Link>
          <button type="button" className={dropDownclasses} onClick={this.toggleDropdown} />
        </div>
        <div className={menuClasses}>
          <div className="link-container features">
            <a href="#">what are we ?</a>
            <a href="#">how to use</a>
            <a href="#">about us</a>
          </div>
          <div className="link-container">
            <Link to="/signup" className="cta-button">Signup</Link>
            <Link to="/login" className="transparent-button">Login</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(NavBar);

