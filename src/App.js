import React, { Component, useEffect } from 'react';
import Resume from './components/Resume';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <Resume />
      </main>
    )
  }
}

export default App;