import React, { Component } from 'react';
import { connect } from 'react-redux';
import authentication from '../../higher-order-components/authentication/authentication';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

export default authentication(Dashboard);
