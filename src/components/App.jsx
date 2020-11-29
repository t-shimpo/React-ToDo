import React, { Component } from 'react';
import Input from './Input'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container text-center">
        <h1>Todoリスト</h1>
        <Input />
      </div>
    )
  }
}

export default App;
