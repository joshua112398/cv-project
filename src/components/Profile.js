import React, {Component} from 'react';

class Profile extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="profile">
        <form>
          <input id="firstName" placeholder="First Name"></input>
        </form>
      </div>
    )
  }
}

export default Profile;