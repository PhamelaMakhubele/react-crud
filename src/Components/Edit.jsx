
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';
import BackArrow from './BackArrow';
import axios from 'axios';

const Edit = ({ onEdit }) => {
  /*const [Image, setImage] = useState(); // Initialize to null
  const [FullName, setFullName] = useState('');
  const [Title, setTitle] = useState('');*/
  
  const { id } = useParams();
 
  const [members, setMembers] =useState({
    id: '',
    Image: '',
    FullName: '',
    Title: ''
  })

 
 

  
  const HandleChange = (e) =>{
    const data = new FileReader()
    const file = e.target.files[0]
    data.addEventListener('loadend', () =>{
      setMembers({...members, Image:e.target.value.result})
    })
    data.readAsDataURL(file)
  }
  
  /*useEffect(() => {
    axios.get(`http://localhost:5000/members/${id}` )
      .then((res) => setMembers(res.members))
      .catch((err) => {
        console.log(err.message);
      });
      
      }, [id])*/

      useEffect(() => {
        axios.get(`http://localhost:5000/members/${id}`)
          .then((res) => setMembers(res.data)) 
          .catch((err) => {
            console.log(err.message);
          });
      }, [id]);
      
     
      const onSubmit = async (e) => {
        e.preventDefault();

      
        try {
          const response = await axios.put(`http://localhost:5000/members/${id}`, members);
          
          if (response.status === 200) {
            onEdit(); // Notify the parent component about the edit
            alert('Member updated successfully');
          } else {
            alert('Failed to update member');
          }
        } catch (error) {
          console.error('Error updating member:', error);
        }

        setMembers({
          id: '',
          Image: '',
          FullName: '',
          Title: ''
        });
        
      };
      

  return (
    <div className="Container form-container">
      <BackArrow />
      <form action="PUT" onSubmit={onSubmit}>
        <div className='image-circle'>
        {members.Image ? (
          <img src={members.Image} alt='display' className='Image' />
        ):null}
        </div>
        <label htmlFor="fileInput" className='custom-file-input'>
         {members.Image ? '-' : '+'}
          
        </label>
        <input
          id='fileInput'
          type="file"
          name="file"
          accept='image/*'
          //value={members.Image}
          //onChange={(e) => setImage({...Updatedmembers,Image:e.target.files[0]})} // Handle file change properly
          className="UploadImage"
          onChange={HandleChange}
         
        /> 
      
      
        <input
          type="text"
          name="name"
          value={members.FullName}
          onChange={(e) => setMembers({...members, FullName:e.target.value})}
          className="input-field"
        />
        <input
          type="text"
          name="title"
          value={members.Title}
          onChange={(e) => setMembers({...members,Title:e.target.value})}
          className="input-field"
        />
        <Button />
      </form>
    </div>
  );
};

export default Edit;





