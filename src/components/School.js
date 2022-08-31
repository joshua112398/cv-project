import React, { Component } from 'react';

class School extends Component {
  constructor() {
    super()

    this.state = {
      name: 'School Name',
      location: 'Location',
      gradYear: 'Grad Year',
      major: 'Major',
      GPA: 'GPA',
      displayForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleChange(e, input) {
    this.setState((state) => {
      let currentState = state;
      currentState[input] = e.target.value;
      return currentState;
    });
  }

  showForm() {
    this.setState({
      displayForm: true,
    });
  }

  hideForm(e) {
    e.preventDefault();
    this.setState({
      displayForm: false,
    });
  }

  render() {
    const schoolForm = (
      <form className="schoolForm">
        <input 
          onChange={(e) => {this.handleChange(e, "name")}} 
          value={this.state.name}></input>
        <input 
          onChange={(e) => {this.handleChange(e, "location")}} 
          value={this.state.location}/>
        <input 
          onChange={(e) => {this.handleChange(e, "gradYear")}} 
          value={this.state.gradYear}/>
        <input 
          onChange={(e) => {this.handleChange(e, "major")}}  
          value={this.state.major}/>
        <input 
          onChange={(e) => {this.handleChange(e, "GPA")}} 
          value={this.state.GPA}/>
        <button type="submit" onClick={this.hideForm}>Confirm</button>
      </form>
    );
    return (
      <div className="school">
        {this.state.displayForm ? schoolForm : null}
        <div className="schoolContent" onClick={this.showForm}>
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