import React from 'react'

class Show extends React.Component {
    
  render () {
    return (
      <>
        <div className="details">
         <h4> Name: { this.props.user.name } </h4>
         <h6> Interests: { this.props.user.interests} </h6>
       </div>
      </>
    )
  }
 }
export default Show