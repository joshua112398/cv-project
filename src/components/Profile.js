import React, {Component} from 'react';

class Profile extends Component {
  constructor() {
    super()

    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      address: 'Address',
      phoneNumber: 'Phone Number',
      email: 'Email Address',
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
    const profileForm = (
      <form id="profileForm">
        <input 
          onChange={(e) => {this.handleChange(e, "firstName")}} 
          id="firstNameInput" 
          value={this.state.firstName}/>
        <input 
          onChange={(e) => {this.handleChange(e, "lastName")}} 
          id="lastNameInput" 
          value={this.state.lastName}/>
        <input 
          onChange={(e) => {this.handleChange(e, "address")}} 
          id="addressInput" 
          value={this.state.address}/>
        <input 
          onChange={(e) => {this.handleChange(e, "phoneNumber")}} 
          id="phoneNumberInput" 
          value={this.state.phoneNumber}/>
        <input 
          onChange={(e) => {this.handleChange(e, "email")}} 
          type="email" 
          id="emailInput" 
          value={this.state.email}/>
        <button type="submit" onClick={this.hideForm}>Confirm</button>
      </form>
    );
    return (
      <div className="profile">
        {this.state.displayForm ? profileForm : null} 
        <div id="profileContent">
          <h1 id="firstName" onClick={this.showForm}>{this.state.firstName} {this.state.lastName}</h1>
          <h3 id="address">{this.state.address}</h3>
          <h3 id="phoneNumber">{this.state.phoneNumber}</h3>
          <h3 id="email">{this.state.email}</h3>
        </div>
      </div>
    )
  }
}

export default Profile;