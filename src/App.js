import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.empty = ['','','','','','','','','']
    this.state = { 
      spaces: this.empty,
      isPlayerOne: true
    }
    this.ourClick = this.ourClick.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
  }
  ourClick(event){
    var idx = event.target.id
    if (this.state.spaces[idx])
      return
    
    var updated = this.state.spaces.concat()
    updated[idx] = this.state.isPlayerOne ? 'X' : 'O'
    this.setState({
      spaces: updated,
      isPlayerOne: !this.state.isPlayerOne
    })
    console.log(event.target.id)
  }

  clearBoard(){
    this.setState({
      spaces: this.empty
    })
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td onClick={this.ourClick} id="0">{ this.state.spaces[0] }</td>
              <td onClick={this.ourClick} id="1">{ this.state.spaces[1] }</td>
              <td onClick={this.ourClick} id="2">{ this.state.spaces[2] }</td>
            </tr>
            <tr>
              <td onClick={this.ourClick} id="3">{ this.state.spaces[3] }</td>
              <td onClick={this.ourClick} id="4">{ this.state.spaces[4] }</td>
              <td onClick={this.ourClick} id="5">{ this.state.spaces[5] }</td>
            </tr>
            <tr>
              <td onClick={this.ourClick} id="6">{ this.state.spaces[6] }</td>
              <td onClick={this.ourClick} id="7">{ this.state.spaces[7] }</td>
              <td onClick={this.ourClick} id="8">{ this.state.spaces[8] }</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.clearBoard}>Clear board</button>
      </div>
    );
  }
}

export default App;
