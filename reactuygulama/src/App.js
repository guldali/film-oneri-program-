import React, { Component } from 'react';
import User from "./components/User";
import Film from "./components/Film";


class App extends Component {
  state = {
    modlar:[{
      id:"1",
      film:"unutulmazlar"
    },
    {
      id:"2",
      film:"game of thorouns"
    },
    {
      id:"3",
      film:"hadi inşallah"
    }
    ]
  }
  render() {
    return (
      <div className="App">
      <User film={this.state.modlar}></User>
      </div>
    );
  }
}

export default App;
