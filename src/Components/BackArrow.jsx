import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
//import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BackArrow = () => {

    const iconStyle={
        scale:'3',
        color: 'blue',
        marginLeft: '20px',
        marginTop:'15px',
  
      }

    /*const navigate = useNavigate
    const GoBack= () => navigate("/", {replace: false} )*/


  
  return (
        <Link to={'/'}><BsArrowLeft style={iconStyle} /></Link>

  )
}

export default BackArrow