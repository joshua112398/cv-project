import React, { Component } from 'react';
import School from './School';

class Education extends Component {
  constructor() {
    super()

    this.state = {
      schools: [],
    }
  }

  render() {
    return (
      <div className="education">
        <h1>Education</h1>
        <School />
        <School />
        <School />
      </div>
    )
  }
}

export default Education;