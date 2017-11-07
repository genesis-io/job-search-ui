import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Authentication = (ComposedComponent) => {
  class Auth extends Component {
    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  return Auth;
};
