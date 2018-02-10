import React, { Component } from 'react';
import authentication from '../../higher-order-components/authentication/authentication';
import SideBar from '../../components/sidebar/sidebar';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <SideBar/>
      </div>
    );
  }
}

export default authentication(Dashboard);
