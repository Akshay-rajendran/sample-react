import React from 'react'

function UserCard(props) {   
  return (
    <div className='Usercard'>
        <h1>{props.User.UserName}</h1>
        <h1>{props.User.UserId}</h1><br />
        <button>view user</button>
    </div>
  )
}

export default UserCard