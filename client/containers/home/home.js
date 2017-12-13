import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import './home.scss';

export default class Home extends Component {
  constructor({ children }) {
    super({ children });
  }
  render() {
    return (
      <div>
        <NavBar />
        {this.children}
      </div>
    );
  }
}
