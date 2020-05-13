import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    country: "",
    city: "",
    landmarks: "",
    season: "",
    image: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state)
  };

  handleLocationSubmit = (event) => {
    console.log("submitting location info")
    event.preventDefault()
    let userId = this.props.user.id
    const locationInfo = {
     country: this.state.country,
     city: this.state.city,
     landmarks: this.state.landmarks,
     season: this.state.season,
     image: this.state.image
    }

    this.props.handleAddLocation(event, userId, locationInfo)
    this.setState({ country: '', city: '', landmarks: '', season: '', image: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleLocationSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"country"}
          placeholder={"Country to visit"}
          type={"text"}
          value={this.state.country}
          id={"country"}
        />
         <Input
          handleChange={this.handleChange}
          name={"city"}
          placeholder={"City to visit"}
          type={"text"}
          value={this.state.city}
          id={"city"}
        />
          <Input
          handleChange={this.handleChange}
          name={"landmarks"}
          placeholder={"Landmarks to see"}
          type={"text"}
          value={this.state.landmarks}
          id={"landmarks"}
        />
         <Input
          handleChange={this.handleChange}
          name={"season"}
          placeholder={"Season to visit"}
          type={"text"}
          value={this.state.season}
          id={"season"}
        />
        <Input
          handleChange={this.handleChange}
          name={"image"}
          placeholder={"image link"}
          type={"text"}
          value={this.state.image}
          id={"image"}
        />
        <input type="submit" value="Add Location"/>
      </form>
    );
  }
}
export default Form;
