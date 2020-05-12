import React from 'react'

class Show extends React.Component {
    
  render () {
      const {user, handleDelete } = this.props
    return (
      <>
        <div className="details">
         <h4> Name: { user.name } </h4>
         {this.props.user.hometown ? <h4>From: {user.hometown}</h4> : null }
         <h6> Interests: { user.interests} </h6>
         <button onClick={() => handleDelete(user)}>Delete</button>
       </div>
      </>
    )
  }
 }
export default Show