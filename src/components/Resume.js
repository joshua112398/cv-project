import React, { Component } from 'react';
import Profile from './Profile';
import Education from './Education';
import Experiences from './Experiences';

class Resume extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="resume">
        <Profile />
        <Education />
        <Experiences />
      </div>
    )
  }
}

export default Resume;