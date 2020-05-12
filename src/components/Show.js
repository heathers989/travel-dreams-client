import React from 'react'
import Form from "./Form"

class Show extends React.Component {

    state = {
        formVisible: false
    }

    toggleForm = () => {
        console.log("toggling form")
        this.setState({formVisible: !this.state.formVisible})
      }

      handleUpdate = (event, user) => {
        console.log('I like pie')
        this.props.handleUpdate(event, user)
        this.toggleForm()
      }
    
  render () {
      const {user, handleDelete } = this.props
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
       </div>}
      </>
    )
  }
 }
export default Show