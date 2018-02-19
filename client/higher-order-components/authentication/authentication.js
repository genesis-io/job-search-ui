import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isTokenAuth } from '../../services/utils';

export default (ComposedComponent) => {
  class Auth extends Component {
    componentDidMount() {
      const { history } = this.props;
      const token = localStorage.getItem('accessToken');
      const isAuth = isTokenAuth(token);
      if (!isAuth) {
        history.push('/');
      }
    }
    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  const mapStateToProps = state => ({
    user: state.userProfile,
  });

  return connect(mapStateToProps)(Auth);
};
