import React from 'react';
import Contact from '../../Contact/Contact';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;