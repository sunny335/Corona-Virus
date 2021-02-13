import React from 'react';

import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import Services from './Services/Services';
import AboutAppoinment from 'src/containers/AboutAppoinment/AboutAppoinment';
import Reviews from 'src/containers/Reviews/Reviews';
import Blogs from 'src/containers/Blogs/Blogs';
import Doctors from 'src/containers/Doctors/Doctors';

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <AboutAppoinment />
      <Reviews />
      <Doctors />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
