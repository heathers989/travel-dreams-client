import React from 'react';


function Users(props) {
  let {users, getUser} = props;
  // users = props;
  // getUsers()
    return (
      <>
     
        <div className="userinfo">
         
    {users.map(user => (
    <div className="oneuser" key={user.id} ><button onClick={() => getUser(user)}>Click for more information</button>
        <div>Name: {user.name}</div>
        <div>Interests: {user.interests}</div>

        <table>
        <tbody>
        <tr>
          <th>Wants to visit:</th> 
          <th>Wants to see:</th> 
          <th>Wants to go during:</th>
          <th>Image:</th> 
         </tr> 
         {user.locations.map(location => (
         <tr key={location.id}>
          <td>
          <p>{location.city},</p>
            <p>{location.country}</p>
            </td>
            <td>{location.landmarks}</td>
            <td>{location.season}</td>
            <td>
              <a href={location.image} target="_blank" rel="noopener noreferrer">
                <img alt="country selected" src={location.image}/>
              </a>
            </td>
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