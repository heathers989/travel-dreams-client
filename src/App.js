import React, { Component } from 'react';
import Users from './components/Users.js'
import Form from './components/Form'
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault()
    console.log(formInputs)
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
        <Form handleSubmit={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
