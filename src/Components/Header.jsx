import React from 'react'
import Button from './Button'
//import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = ({ onAdd}) => {
    const navigate = useNavigate()
    const HandleAdd= () => navigate("/Add", {replace: true} )
    

  return (
    
    <div >
      
      <Button onClick={HandleAdd}  />
        


    </div>
  )
}

export default Header