import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState({});

  const onButtonClick = async (e) => {
    e.preventDefault();
    setImageUrl(input);

    // send request to backend.
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/image', { imageUrl }, config);

    // Setting box line of face.
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const boxMaking = {
      leftCol: data.bottom_row * width,
      topRow: data.top_row * height,
      rightCol: width - data.right_col * width,
      bottomRow: height - data.bottom_row * height,
    };

    setBox(boxMaking);

    const api = document.getElementById('api');
    api.style.display = 'block';
  };

  return (
    <div className='formContainer'>
      <p className='paragraph'>
        {'This Magic Brain will detect faces in your picture. Give it a try'}
      </p>

      <form className='form'>
        <input
          className='input'
          type='text'
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' onClick={onButtonClick}>
          Detect
        </button>
      </form>

      <div>
        {imageUrl ? (
          <img
            alt='face-detection'
            src={imageUrl}
            className='image'
            id='inputimage'
          />
        ) : (
          <></>
        )}
      </div>
      <div id='api'>{'Sorry, the api is not operational. Try Again later'}</div>
    </div>
  );
};

export default Form;
