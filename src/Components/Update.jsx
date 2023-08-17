/*import React, { useState } from 'react';
import './update.css'; // Make sure to import your CSS file

function Update() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className='container'>
      
      {selectedImage && (
        <div className='image-preview'>
          <p>Preview:</p>
          <img src={selectedImage} alt='preview' className='PreviewImage' />
        </div>
      )}
      <input
        type="file"
        name="file"
        accept='image/*'
        className="UploadImage"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default Update;*/

import React, { useState } from 'react';
import './update.css'; // Make sure to import your CSS file

function Update() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className='container'>
      <div className='image-circle'>
        {selectedImage && <img src={selectedImage} alt='display' className='Image' />}
      </div>
      <label htmlFor='fileInput' className='custom-file-input'>
        {selectedImage ? '-' : '+'}
      </label>
      <input
        id='fileInput'
        type='file'
        name='file'
        accept='image/*'
        className='UploadImage'
        onChange={handleImageChange}
      />
    </div>
  );
}

export default Update;

