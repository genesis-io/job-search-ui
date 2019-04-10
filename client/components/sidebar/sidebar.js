import React, { Component } from 'react';
import NavigationIcon from '../navigation-icon/navigation-icon';
import './sidebar.scss';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <NavigationIcon
          logo="fa-book"
          location="/"
          description="logs"
        />
        <NavigationIcon
          logo="fa-industry"
          location="/"
          description="jobs"
        />
        <NavigationIcon
          logo="fa-laptop"
          location="/"
          description="projects"
        />
        <NavigationIcon
          logo="fa-user-circle"
          location="/"
          description="friends"
        />
      </div>
    );
  }
}

export default SideBar;
