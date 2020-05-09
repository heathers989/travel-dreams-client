import React, { Component } from 'react';

class Users extends Component {
  render () {
    //   console.log(this.props.users)
    return (
      <>
        <h1>Where do you want to go?</h1>

        <div className="userinfo">
    {this.props.users.map(user => (
    <div key={user.id}>
        <div>Name: {user.name}</div>
        <div>Interests: {user.interests}</div>

        <table>
        <tbody>
        <tr>
          <th>Wants to visit: </th> 
          <th>Wants to see:</th> 
          <th>Preferred time of year:</th> 
         </tr> 
         {user.locations.map(location => (
         <tr key={location.id}>
          <td>{location.city}, {location.country}</td>
          <td>{location.landmarks}</td>
          <td>{location.season}</td>
          </tr>
      ))}
    </tbody>
    </table>
</div>
        
    ))}
        </div>
        
      </>
    )
  }
}

export default Users