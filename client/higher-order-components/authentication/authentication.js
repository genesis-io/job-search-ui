import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Auth extends Component {
    componentDidMount() {
      const { user, history } = this.props;
      if (!user.isAuth) {
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
