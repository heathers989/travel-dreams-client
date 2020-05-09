import React, { Component } from 'react';
import Users from './components/Users.js'
import './App.css';

class App extends Component {

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    fetch('/users/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}

export default App;
