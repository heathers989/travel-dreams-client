import React from 'react';


function Users(props) {
  let {users, getUser} = props;
  // users = props;
  // getUsers()
    return (
      <>

        <div className="userinfo">
         
    {users.map(user => (
    <div className="oneuser" key={user.id} onMouseOver={() => getUser(user)}>
        <div>Name: {user.name}</div>
        <div>Interests: {user.interests}</div>

        <table>
        <tbody>
        <tr>
          <th>Wants to visit: </th> 
          <th>Wants to see:</th> 
          <th>Wants to go during:</th> 
         </tr> 
         {user.locations.map(location => (
         <tr key={location.id}>
          <td>
            <p>{location.country}</p></td>
          </tr>
      ))}
    </tbody>
    </table>
</div>
        
    ))}
    <br/>
        </div>
        
      </>
    )
  }

export default Users