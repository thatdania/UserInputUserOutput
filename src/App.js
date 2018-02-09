import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    username:[
      {name: "Dania"},
      {name: "Boris"}
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
  username: [
    {name: "Dania"},
    {name: event.target.value }
  ]
})
  }

  render() {
    return (
      <div className="App">
      <UserOutput name={this.state.username[0].name} word="jello"/>
      <UserOutput name={this.state.username[1].name} word="yellow?"/>
      <UserInput change={this.switchNameHandler} name={this.state.username[1].name}/>
      </div>
    )
  }
}

export default App;
