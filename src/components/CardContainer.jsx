import React from 'react'
import UserCard from './usercard'

function CardContainer() {
    let UserList=[{UserName:"unni",UserId:123},{UserName:"appu",UserId:456},{UserName:"adhi",UserId:789}]
  return (
    <div className='CardContainer'>
        {
            UserList.map((u)=>{
            
                return (<UserCard User={u}/>)
            })
        }
        
    </div>
  )
}

export default CardContainer





