import React, { Component } from 'react';
import Users from './components/Users.js'
import Form from './components/Form'
import './App.css';
import Show from './components/Show.js'

fetch("http://localhost:3000/users")
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class App extends Component {

  state = {
    users: [],
    show: false,
    setShow: false
  }

  getUser = (user) => {

    this.setState({user, 
      getUserActive: true
      // , getEditUserActive: false
    }) 

  }

  handleAdd = (event, userinfo) => {
   event.preventDefault()
   fetch("http://localhost:3000/users", {
     body: JSON.stringify({name: userinfo.name, interests: userinfo.interests}),
     method: "POST",
     headers: {
       'Accept': "application/json, text/plain, */*",
       "Content-Type": "application/json"
     }
   })
   .then((createdUser) => createdUser.json())
   .then((jsonedUser) => {
     console.log(jsonedUser)
     let jsonedUserId = jsonedUser.id
     fetch(`http://localhost:3000/users/${jsonedUserId}/locations`, {
      body: JSON.stringify({country: userinfo.country
      }),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
     }).then(location => location.json())
     this.setState({
       users: [jsonedUser, ...this.state.users]
     })
   })
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
    console.log("users after get:" + this.state.users),
    err => console.log(err))
  }



  render() {
    return (
      <div className="App">
         <Users getUser={this.getUser}
         users={this.state.users}/>
         {this.state.getUserActive ? <Show user={this.state.user}/> : null}
        <Form handleSubmit={this.handleAdd}/>
      </div>
    );
  }

  
}

export default App;
