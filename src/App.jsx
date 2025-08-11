import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-screen-2xl mx-auto pt-32 space-y-14'>
      <div className='bg-base-100 shadow-lg fixed top-0 left-0 right-0 z-50'>
        <Navbar />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;