import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import {BiEditAlt} from 'react-icons/bi'
//import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Member = ({member, onDelete, onEdit}) => {

  //const navigate= useNavigate()
  //const HandleEdit= () => navigate("/Edit", {replace: true} )

  return (
    <div className='member'>

            {Image &&<img src={member.Image} alt='display' className='Image'/>}
            <div className='texts'>
            <h2>{member.FullName}</h2> 
            <p>{member.Title }</p>
            </div>
            <div className='icons'>
            <Link to={`/Edit/${member.id}`}><BiEditAlt /*onClick={()=>onEdit(member.id)}*/ /></Link>
            <MdDeleteOutline onClick={()=>onDelete(member.id)}/>
            </div>
           
           
      
    </div>
  )
}

export default Member