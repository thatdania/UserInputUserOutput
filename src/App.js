import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import Useriutput from './UserInput/UserInput'

class App extends Component {

  state = {
    username:[
      {name: "Dania"},
      {name: "Boris"}
    ]
  }

  render() {
    return (
      <div className="App">
      <UserOutput name={this.state.username[0].name} word="jello"/>
      <UserOutput name={this.state.username[1].name} word="yellow?"/>

      </div>
    )
  }
}

export default App;
