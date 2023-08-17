import React from 'react'
import Member from './Member'
/*import { useState } from 'react'*/

const Members = ({members, onDelete}) => {
 
  return (
    <div>
        {members.map((member, id)=>(
            <Member key={id} member={member} onDelete={onDelete}/>
        
        ))}
    </div>

    
      
  
  )
}

export default Members