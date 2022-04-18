import React from 'react';
import myImg from "../../Images/naim.png"

const About = () => {
  return (
    <div>
      <img className='d-block w-50 mx-auto p-5' src={myImg} alt="" />
      <p className='p-5'>I want to be a web developer in this year.for this i have to do 6 hours to 8 hours of
        coding every day.i will not give up,i must finish it.it's easier and more beautiful for me to be with the
        programming-hero on this journey</p>
    </div>
  );
};

export default About;