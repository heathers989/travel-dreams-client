import React from 'react'
import Form from "./Form"
import Lform from './Lform'

class Show extends React.Component {

    state = {
        formVisible: false,
        locationForm: false
    }

    toggleForm = () => {
        console.log("toggling edit form")
        this.setState({formVisible: !this.state.formVisible})
      }

      toggleLocationForm = () => {
        console.log("toggling Location form")
        this.setState({locationForm: !this.state.locationForm})
      }

      handleUpdate = (event, user) => {
        console.log('I like pie')
        this.props.handleUpdate(event, user)
        this.toggleForm()
      }
    
  render () {
      const {user, handleDelete, getUser, handleAddLocation} = this.props
    return (
      <>

       {this.state.formVisible
        ? <Form user={user} handleSubmit={this.handleUpdate}/>
        :
        <div className="details">
         <h4> Name: { user.name } </h4>
         {this.props.user.hometown ? <h4>From: {user.hometown}</h4> : null }
         <h6> Interests: { user.interests} </h6>
         <button onClick={() => handleDelete(user)}>Delete</button>
         <button onClick={this.toggleForm}>Edit</button>
         <button onClick={() => getUser()}>Close</button>
         <button onClick={this.toggleLocationForm}>Add New Location</button>
       </div>}

       
         {this.state.locationForm ? <Lform user={user} handleAddLocation={handleAddLocation}/>: null}
      </>
    )
  }
 }
export default Show