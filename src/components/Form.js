import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    interests: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      name: this.state.name,
      interests: this.state.interests,   
    }
    if (this.props.user) user.id = this.props.user.id
    this.props.handleSubmit(
      event,
      user
    )
  }

  componentDidMount() {
    if (this.props.user) {
      const { name, interests } = this.props.user;
      this.setState({
        name: name || "",
        interests: interests || ""
      });
    }
  }

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
  //  .then(updatedNotice => {
  //    // be naughty
  //    this.getNotices()
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
        {/* <Input
          handleChange={this.handleChange}
          name={"phone"}
          placeholder={"Notice Phone"}
          type={"text"}
          value={this.state.phone}
          id={"phone"}
        /> */}
        <input type="submit" value={this.props.user ? "update this user": "add a user"} />
      </form>
    );
  }
}
export default Form;
