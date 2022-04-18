import React from 'react';
import myImg from "../../Images/naim.png"

const About = () => {
  return (
    <div>
      <img className='d-block w-50 mx-auto p-5' src={myImg} alt="" />
      <p className='p-5'>
        <strong>
          I'm  Naimur Rahaman. I want to become a web developer. I have worked hard to complete web development course from programmeing hero. I come to the end of the course. My dream is going to come true.
        </strong>
      </p>
    </div>
  );
};

export default About;