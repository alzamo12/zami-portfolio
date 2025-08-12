import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
      <div className='max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-5 md:mx-auto pt-32 space-y-12 lg:space-y-24 mb-14 lg:mb-20'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    );
};

export default Home;