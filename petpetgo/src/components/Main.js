import React, { Component } from 'react'
import Mine from './Mine'
import {
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/mine" component={Mine} />
      </div>
    );
  }
}

export default App
