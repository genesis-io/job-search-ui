import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './navigation-icon.scss';

class NavigationIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    };
  }

  render() {
    const { logo, description, location } = this.props;
    const { hidden } = this.state;
    return (
      <Link className="navigation-icon" to={location}>
        <i className={`fa ${logo}`}/>
        { !hidden &&
          <div className='navigation-icon-tool-tip'>{description}</div>
        }
      </Link>
    );
  }
}

NavigationIcon.PropTypes = {
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};


//journal entries, friends, projects, jobs
export default NavigationIcon;
