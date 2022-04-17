import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='bg-dark text-white'>
      <p className='text-center p-5'>Copyright  &#169;  {year}</p>
    </div>
  );
};

export default Footer;