import React, { Component } from 'react';
import Users from './components/Users.js'
import Form from './components/Form'
import './App.css';

fetch("http://localhost:3000/users")
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class App extends Component {

  state = {
    users: [],
    user: null
  }

  componentDidMount(){
    this.getUsers()
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({users: json}),
    err => console.log(err))
  }

  handleAdd = (user) => {
    const copyUsers = [...this.state.users]
    copyUsers.unshift(user)
     this.setState({
       users: copyUsers
     })
  }
 
  // refresh = () => {
  //   window.location.reload()
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   let user = {
  //     name: this.state.name,
  //     interests: this.state.interests,
  //     country: this.state.country,
  //     city: this.state.city,
  //     landmarks: this.state.landmarks,
  //     season: this.state.season
  //   }
  //   if (this.props.user) user.id = this.props.user.id
  //   this.props.handleSubmit(
  //     event,
  //     user
  //   )
  // }




  render() {
    return (
      <div className="App">
         <Users users={this.state.users}/>
        <Form handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
