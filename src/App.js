import React, { Component } from 'react';
import Users from './components/Users.js'
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  

  getUsers = () => {
    fetch('/users')
    .then(response => response.json())
    .then(json => this.setState({users: json}))
  }

  componentDidMount(){
    this.getUsers()
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
