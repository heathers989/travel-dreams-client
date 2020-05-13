import React, { Component } from 'react';
import Users from './components/Users.js'
import Form from './components/Form'
import './App.css';
import Show from './components/Show.js'

// fetch("${baseURL}locations")
//   .then(data => {
//     return data.json()},
//     err => console.log(err))
//   .then(parsedData => console.log(parsedData),
//    err => console.log(err))

let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'https://traveldreams-api.herokuapp.com/'
}

class App extends Component {

  state = {
    users: [],
    show: false,
    setShow: false,
    
  }

  //for show route
  getUser = (user) => {

    this.setState({user, 
      getUserActive: !this.state.getUserActive
      // , getEditUserActive: false
    }) 

  }

  handleAdd = (event, userinfo) => {
   event.preventDefault()
   fetch(`${baseURL}users`, {
     body: JSON.stringify({name: userinfo.name, hometown: userinfo.hometown, interests: userinfo.interests}),
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
     fetch(`${baseURL}users/${jsonedUserId}/locations`, {
      body: JSON.stringify({country: userinfo.country, city: userinfo.city, landmarks: userinfo.landmarks, season: userinfo.season, image: userinfo.image
      }),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
     }).then(location => location.json())
     .then(jsonedLocation => {jsonedUser.locations = [jsonedLocation]; console.log(jsonedUser)})
    //  this.prepareUsers()
     this.getUsers()
   })
  }

  handleAddLocation = (event, userId, locationInfo) => {
    event.preventDefault()
    console.log("user id for location being created: " + userId)
   //  event.persist()
    fetch(`${baseURL}users/${userId}/locations`, {
     body: JSON.stringify({country: locationInfo.country, city: locationInfo.city, landmarks: locationInfo.landmarks, season: locationInfo.season, image: locationInfo.image
     }),
     method: 'POST',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
    })
    .then(location => location.json())
    this.prepareUsers()
    this.getUsers()
    // .then(jsonedLocation => {jsonedUser.locations = [jsonedLocation]; console.log(jsonedUser)})
  }

  prepareUsers = () => {
    console.log("give users or locations time to add")
    this.getUsers()
  }
 
  handleDelete = (deletedUser) => {
    fetch(`${baseURL}users/${deletedUser.id}`, {
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
    fetch(`${baseURL}users`)
    .then(response => { 
      return response.json()},
      err => console.log(err))
    .then(json => this.setState({users: json}),
    console.log("get users is running"),
    err => console.log(err))
  }

  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    console.log('in it to win it')
    fetch(`${baseURL}users/${formInputs.id}`, {
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
        <h1>Where To Next?</h1>
        <p>Fill out the form with your information and where you'd like to travel to!</p>
         <Form handleSubmit={this.handleAdd}/>
         <br/>
         <Users users={this.state.users} getUser={this.getUser}/>

         {this.state.getUserActive ? <Show getUser={this.getUser} handleAddLocation={this.handleAddLocation} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} user={this.state.user}/> : null}
       
      </div>
    );
  }

  
}

export default App;
