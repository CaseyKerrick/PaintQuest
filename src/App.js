import React, { useState, useEffect } from 'react';
import { Button, Input, TextField } from '@mui/material';
import PaintStroke from './images/paint_stroke.png';
import './App.css';

function App() {

  const [uploadedImage, setUploadedImage] = useState();
  const [selectedColor, setSelectedColor] = useState('');

  const uploadImage = (e) => setUploadedImage(URL.createObjectURL(e.target.files[0]));

  // useEffect(() => {
  //   async function draw() {
  //     if (!!uploadedImage) {
  //       const canvas = document.getElementById('imageCanvas');
  //       const context = canvas.getContext('2d');
  //       const image = document.getElementById('displayImage');
  //       // console.log(uploadedImage);
  
  //       await context.drawImage(image, 0, 0);
  //     }
  //   }

  //   draw();
  //   // console.log('made it!', uploadedImage);
    
  // }, [uploadedImage]);


  return (
    <div className="App">
      {/* <div>
        <Input type='file' onChange={uploadImage} />
        <Button onClick={selectColor}>Select Color</Button>

        <img id='displayImage' src={uploadedImage} alt='' onClick={check} width='300' height='400' />
      </div> */}
      <div className='title'>
        {/* <img src={PaintStroke} alt='A paint stroke' /> */}
        Paint Quest
      </div>
      <div className='main'>
        <div className='colorPicker'>
          <div className='colorPickerForm'>
            <TextField
              label='Hex Color'
              className='selectedColor'
              value={selectedColor}
              onChange={setSelectedColor}
            />
            <Button></Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
