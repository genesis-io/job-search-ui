import React, { Component } from 'react';
import authentication from '../../higher-order-components/authentication/authentication';
import SideBar from '../../components/sidebar/sidebar';
import './dashboard.scss';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //grab user information
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
