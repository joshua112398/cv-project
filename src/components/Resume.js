import React, { Component } from 'react';
import Profile from './Profile';

class Resume extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="resume">
        <Profile />
      </div>
    )
  }
}

export default Resume;