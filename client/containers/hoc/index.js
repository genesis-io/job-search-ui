import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Auth extends Component {
    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  return Auth;
};
