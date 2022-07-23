import React from 'react';
import './logo.css';
import Tilt from 'react-parallax-tilt';
import logoImage from '../../utils/brain-removebg-preview.png';

const Logo = () => {
  return (
    <Tilt className='logo'>
      <img className='logoImage' alt='Logo' src={logoImage} />
    </Tilt>
  );
};

export default Logo;
