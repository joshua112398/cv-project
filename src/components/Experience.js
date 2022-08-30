import React, { Component } from 'react';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Electrical Engineer',
      startDate: 'Oct 2017',
      endDate: 'Nov 2021',
      description: 'Designed PCBs for an aquatic drone',
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
      <div className="experience">
        <form className="experienceForm">
          <input 
            onChange={(e) => {this.handleChange(e, "title")}}  
            placeholder="Job or Project Title"></input>
          <input 
            onChange={(e) => {this.handleChange(e, "startDate")}}  
            placeholder="Start Date"/>
          <input 
            onChange={(e) => {this.handleChange(e, "endDate")}}  
            placeholder="End Date"/>
          <textarea 
            type
            onChange={(e) => {this.handleChange(e, "description")}}  
            placeholder="Description"></textarea>
          <button type="submit">Confirm</button>
        </form>
        <div className="schoolContent">
          <h3>{this.state.title}</h3>
          <p>{this.state.startDate} to {this.state.endDate}</p>
          <p>{this.state.description}</p>
        </div>
      </div>
    )
  }
}

export default Experience;