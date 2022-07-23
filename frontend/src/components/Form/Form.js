import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='formContainer'>
      <p className='paragraph'>
        {'This Magic Brain will detect faces in your picture. Give it a try'}
      </p>

      <form className='form'>
        <input className='input' type='text' />
        <button className='btn'>Detect</button>
      </form>
    </div>
  );
};

export default Form;
