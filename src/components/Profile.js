import React, {Component} from 'react';

class Profile extends Component {
  constructor() {
    super()

    this.state = {
      firstName: 'Timothee',
      lastName: 'Chalamet',
      address: '75 Bloomington Way, Los Angeles CA',
      phoneNumber: '(XXX)XXX-XXXX',
      email: 'tchalametdune@gmail.com',
    }

    this.handleChange = this.handleChange.bind(this);
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
      <div className="profile">
        <form id="profileForm">
          <input 
            onChange={(e) => {this.handleChange(e, "firstName")}} 
            id="firstNameInput" 
            placeholder="First Name"></input>
          <input 
            onChange={(e) => {this.handleChange(e, "lastName")}} 
            id="lastNameInput" 
            placeholder="Last Name"/>
          <input 
            onChange={(e) => {this.handleChange(e, "address")}} 
            id="addressInput" 
            placeholder="Address"/>
          <input 
            onChange={(e) => {this.handleChange(e, "phoneNumber")}} 
            id="phoneNumberInput" 
            placeholder="Phone Number"/>
          <input 
            onChange={(e) => {this.handleChange(e, "email")}} 
            type="email" 
            id="emailInput" 
            placeholder="Email Address"/>
          <button type="submit">Confirm</button>
        </form>
        <div id="profileContent">
          <h1 id="firstName">{this.state.firstName} {this.state.lastName}</h1>
          <h3 id="address">{this.state.address}</h3>
          <h3 id="phoneNumber">{this.state.phoneNumber}</h3>
          <h3 id="email">{this.state.email}</h3>
        </div>
      </div>
    )
  }
}

export default Profile;