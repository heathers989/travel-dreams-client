import React, { Component } from 'react';
import Users from './components/Users.js'
import Form from './components/Form'
import './App.css';
import Show from './components/Show.js'

// fetch("http://localhost:3000/locations")
//   .then(data => {
//     return data.json()},
//     err => console.log(err))
//   .then(parsedData => console.log(parsedData),
//    err => console.log(err))

class App extends Component {

  state = {
    users: [],
    show: false,
    setShow: false
  }

  //for show route
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
     console.log("id for user being created " + jsonedUserId)
    //  event.persist()
     fetch(`http://localhost:3000/users/${jsonedUserId}/locations`, {
      body: JSON.stringify({country: userinfo.country
      }),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
     }).then(location => location.json())
     .then(jsonedLocation => {jsonedUser.locations = [jsonedLocation]; console.log(jsonedUser)})
      this.getUsers()
   })
  }
 
  handleDelete = (deletedUser) => {
    fetch(`http://localhost:3000/users/${deletedUser.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const users = this.state.users.filter(
          (user) => user.id !== deletedUser.id
        );
        this.setState({ users });
      })
      .catch((error) => console.log(error));
  };
 
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

  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    console.log('in it to win it')
    fetch(`http://localhost:3000/users/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
   headers: {
     'Accept': 'application/json, text/plain, */*',
     'Content-Type': 'application/json'
   }
  })
   .then(updatedUser => {
     // go wild
     this.getUsers()
   })
   .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <h1>Where to next?</h1>
         <Form handleSubmit={this.handleAdd} />
         <Users getUser={this.getUser}
         users={this.state.users}/>
         {this.state.getUserActive ? <Show handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} user={this.state.user}/> : null}
       
      </div>
    );
  }

  
}

export default App;
