 {/* <th>Wants to see:</th> 
          <th>Favorite time of year:</th>  */}

          {/* <td>{location.landmarks}</td>
          <td>{location.season}</td> */}

            //  .then(this.setState({
      //   //   name: "",
      //   //   interests: "",
      //   //   country: "",
      //   //   city: "",
      //   //   landmarks: "",
      //   //   season: "",
      //   users: [jsonedUser, ...this.state.users]}))

        // componentDidMount() {
  //   if (this.props.user) {
  //     const { name, interests, country, city, landmarks, season } = this.props.user;
  //     this.setState({
  //       name: name || "",
  //       interests: interests || "",
  //       country: country || "",
  //       city: city || "",
  //       landmarks: landmarks || "",
  //       season: season || ""
  //     });
  //   }
  // }


  handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3000/users', {
        body: JSON.stringify({name: this.state.name, interests: this.state.interests}),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
    })
     .then(createdUser => createdUser.json())
     .then(jsonedUser => {
       let jsonedUserId = jsonedUser.id
       fetch(`http://localhost:3000/users/${jsonedUserId}/locations`, {
        body: JSON.stringify({country: this.state.country, city: this.state.city, landmarks: this.state.landmarks, season: this.state.season}),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
       }).then(location => location.json())
    
       .then (jsonedUser => {
        this.props.handleAdd(jsonedUser)
      })
     })
  }

    handleAdd = (user) => {
    let copyUsers = [...this.state.users]
    copyUsers.unshift(user)
     this.setState({
       users: copyUsers
     })
     console.log(this.state.users)
  }


  {/* <p>{location.city},</p> */}

  {/* <td>{location.landmarks}</td>
          <td>{location.season}</td> */}



        //   <Input
        //   handleChange={this.handleChange}
        //   name={"city"}
        //   placeholder={"City"}
        //   type={"text"}
        //   value={this.state.city}
        //   id={"city"}
        // />
        // <Input
        //   handleChange={this.handleChange}
        //   name={"landmarks"}
        //   placeholder={"Landmarks"}
        //   type={"text"}
        //   value={this.state.landmarks}
        //   id={"landmarks"}
        // />
        // <Input
        //   handleChange={this.handleChange}
        //   name={"season"}
        //   placeholder={"Preferred season"}
        //   type={"text"}
        //   value={this.state.season}
        //   id={"season"}
        // />


         //state = { city: "",
    // landmarks: "",
    // season: "",
    // image: ""}


      // city: this.state.city, landmarks: this.state.landmarks, season: this.state.season