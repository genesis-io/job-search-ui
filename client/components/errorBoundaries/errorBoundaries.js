import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch(error, info) {
    console.log(info);
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Error Boundary</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
