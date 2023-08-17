import React from 'react'
import {useState} from 'react';
import BackArrow from './BackArrow';
import Button from './Button';


const Add = ({onAdd}) => {
    const [Image, setImage] = useState([]);
    const [FullName, setFullName] = useState('');
    const [Title, setTitle] = useState('');

   

   

    const HandleChange = (e) =>{
      const data = new FileReader()
      const file = e.target.files[0]
      data.addEventListener('loadend', () =>{
        setImage(data.result)
      })
      data.readAsDataURL(file)
    }

  

    const onSubmit = (e) => {

        e.preventDefault()

        if (!FullName || !Title ){
            alert('Please fill out all the fields')
            return;
        }
        if (!Image){
            alert('Set your profile picture!')
            return
        }

        onAdd({Image, FullName, Title})

        setImage('')
        setFullName('')
        setTitle('')

    }


  return (

    <div  className='form-container' >
         
    <BackArrow/>
    
        <form action="" onSubmit={onSubmit} >

            <div className='image-circle'>
            {Image && <img src={Image} alt='display' className='Image' />}
            
            </div>
            <label htmlFor='fileInput' className='custom-file-input'>
              {Image ? '+' : '-'}
            </label>

            <input
                id='fileInput'
                className="UploadImage"
                type="file"    
                name='file'
                accept='image/*'
                onChange={HandleChange} 
                //style={{display:'none'}}
               
                 
            /> 
              
           
       
      
             <input
                className="input-field"
                type="text"
                name="name"
                placeholder='Full Names'
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
             />
             <input 
                className="input-field"
                type="text"  
                name='title'  
                placeholder='Job Title' 
                value={Title}
                onChange={(e) => setTitle(e.target.value)}

             />
             <Button />
         </form>
    </div>

    
  )
}


export default Add;