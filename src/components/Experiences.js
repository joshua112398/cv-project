import React, { Component } from 'react';
import Experience from './Experience';

class Experiences extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="experiences">
        <h1>Experience</h1>
        <Experience />
      </div>
    )
  }
}

export default Experiences;