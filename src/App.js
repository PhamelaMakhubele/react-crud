import React from 'react'
import Add from './Components/Add'
import { useState, useEffect } from 'react'
import Members from './Components/Members'
//import Button from './Components/Button'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route/*, useParams*/} from 'react-router-dom'
import Edit from './Components/Edit'
//import Update from './Components/Update'







const App = () => {
//const {id} = useParams()
const [members, setMembers]= useState([])



useEffect(() => {
  fetch('http://localhost:5000/members',{
    method:'GET',
    
    headers:{
      'Content-Type': 'application/json',
      
    },
  })
    .then(res => res.json())
    .then(members => {
      setMembers(members);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}, []);

const addMember= async(member) =>{
  const res =await fetch('http://localhost:5000/members',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify(member),
  })

  const data = await res.json()

  setMembers([...members, data])
}



  const deleteMember = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this member?');
    
    if (confirmDelete){

      const res = await fetch(`http://localhost:5000/members/${id}`, {
      method: 'DELETE',
    })
  
    res.status === 200
      ? setMembers(members.filter((member) => member.id !== id))
      : alert('Error Deleting This Task')
  }
    }

  

    

  return (

    
    <Router>
      
     <div className='Container'>
     

     <Routes>
      <Route
        path='/'
        element={
      <div className='style-home'>
        <Header style={{marginButtom:'50px'}} className='btn' />
        
     

        {members.length > 0 ?(

        <Members 
          members={members}
          onDelete={deleteMember}
        />

      ):(
      'No members to show'
      )}
      </div>

        }
      
      />
      
      <Route path='/Edit/:id' element={<Edit/>}/>
      <Route path='/Add' element={<Add onAdd={addMember}/>}/>
      
      
    
    </Routes>
     </div>
     
     </Router>


  
  
     



   
  )
}

export default App



