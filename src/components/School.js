import React, { Component } from 'react';

class School extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Example School',
      location: 'San Francisco',
      gradYear: '2017',
      major: 'Biology',
      GPA: '3.8',
    }
  }

  handleChange(e, input) {
    this.setState((state) => {
      let currentState = state;
      currentState[input] = e.target.value;
      return currentState;
    });
  }

  render() {
    return (
      <div className="school">
        <form className="schoolForm">
          <input 
            onChange={(e) => {this.handleChange(e, "name")}} 
            className="nameInput" 
            placeholder="School Name"></input>
          <input 
            onChange={(e) => {this.handleChange(e, "location")}} 
            className="locationInput" 
            placeholder="Location"/>
          <input 
            onChange={(e) => {this.handleChange(e, "gradYear")}} 
            className="gradYearInput" 
            placeholder="Graduation Year"/>
          <input 
            onChange={(e) => {this.handleChange(e, "major")}} 
            className="majorInput" 
            placeholder="Major"/>
          <input 
            onChange={(e) => {this.handleChange(e, "GPA")}} 
            className="gpaInput" 
            placeholder="GPA"/>
          <button type="submit">Confirm</button>
        </form>
        <div className="schoolContent">
          <h3 className="name">{this.state.name}</h3>
          <p className="location">{this.state.location}</p>
          <p className="gradYear">{this.state.gradYear}</p>
          <p className="major">{this.state.major}</p>
          <p className="GPA">{this.state.GPA}</p>
        </div>
      </div>
    )
  }
}

export default School;