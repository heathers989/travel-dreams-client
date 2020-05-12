import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    interests: "",
    country: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state)
  };

  handleSubmit = (event) => {
   event.preventDefault()
   const userinfo = {
    name: this.state.name,
    interests: this.state.interests,
    country: this.state.country
  }
  if (this.props.user) {userinfo.id = this.props.user.id}
  else {console.log("no user here")}

   this.props.handleSubmit(event, userinfo)
   this.setState({name: '', interests: '', country: ''})
  }

  componentDidMount() {
    if (this.props.user) {
      const { name, interests, id } = this.props.user;
      this.setState({
        name: name || "",
        interests: interests || "",
        id: id || "",
      });
    }
  }

  

  // DON"T NEED THIS
  // handleUpdate = (event, formInputs) => {
  //   event.preventDefault()
  //   console.log('in it to win it')
  //   fetch(`/notices/${formInputs.id}`, {
  //     body: JSON.stringify(formInputs),
  //     method: 'PUT',
  //  headers: {
  //    'Accept': 'application/json, text/plain, */*',
  //    'Content-Type': 'application/json'
  //  }
  // })
  //  .then(updatedUser => {
  //    // be naughty
  //    this.getUsers()
  //  })
  //  .catch(error => console.log(error))
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Your name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"interests"}
          placeholder={"Your interests"}
          type={"text"}
          value={this.state.interests}
          id={"interests"}
        />
        <Input
          handleChange={this.handleChange}
          name={"country"}
          placeholder={"Country"}
          type={"text"}
          value={this.state.country}
          id={"country"}
        />
        <input type="submit" value={this.props.user ? "update" : "spread the wanderlust"}/>
      </form>
    );
  }
}
export default Form;
