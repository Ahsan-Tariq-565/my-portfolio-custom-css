import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div  id="hero" 
    className="hero-container"
    >
       <Navbar />
      <div className="hero-content">
        <div className='hidden lg:block'></div>

        <div className="hero-text">
          <div className="hero-msim">
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up" >Muhammad Ahsan</p>
            <p data-aos="zoom-in-up" >Tariq</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
