import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen bg-emerald-100 flex flex-col'>
      <ToastContainer />
      <div className='bg-emerald-50 shadow-lg fixed top-0 left-0 right-0 z-50 my-0 py-0'>
        <Navbar />
      </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;