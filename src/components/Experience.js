import React, { Component } from 'react';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Job Title',
      startDate: 'Start Date',
      endDate: 'End Date',
      description: 'Description',
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
    const experienceForm = (
      <form className="experienceForm">
        <input 
          onChange={(e) => {this.handleChange(e, "title")}}  
          value={this.state.title}></input>
        <input 
          onChange={(e) => {this.handleChange(e, "startDate")}}  
          value={this.state.startDate}/>
        <input 
          onChange={(e) => {this.handleChange(e, "endDate")}}  
          value={this.state.endDate}/>
        <textarea 
          onChange={(e) => {this.handleChange(e, "description")}}  
          value={this.state.description}></textarea>
        <button type="submit" onClick={this.hideForm}>Confirm</button>
      </form>
    );

    return (
      <div className="experience">
        {this.state.displayForm ? experienceForm : null}
        <div className="schoolContent" onClick={this.showForm}>
          <h3>{this.state.title}</h3>
          <p>{this.state.startDate} to {this.state.endDate}</p>
          <p>{this.state.description}</p>
        </div>
      </div>
    )
  }
}

export default Experience;