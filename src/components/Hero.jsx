import React from 'react';
// import profile from '/profile.jpg';
import profile from "../assets/zami.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
    return (
        <section id="home" className="hero md:w-screen md:relative py-10 
        md:px-0  text-black bg-cyan-50
        md:left-1/2 md:right-1/2 md:ml-[-50vw] md:mr-[-50vw] rounded-2xl lg:rounded-none
        ">
            <div className="hero-content px-0 max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl w-full flex-col md:flex-row-reverse justify-between">
                <img src={profile} className="max-w-3xs lg:max-w-sm rounded-full shadow-2xl" alt="Profile" />
                <div className='text-center md:text-left'>
                    <h1 className="text-3xl lg:text-5xl font-bold">Md Al Zami</h1>
                    <h3 className='text-xl lg:text-3xl font-semibold mt-4'>Full-Stack developer</h3>
                    <p className="text-sm lg:text-base py-6">I build responsive, user-friendly web applications using modern technologies.</p>
                    <a href="/resume.pdf" download className="btn bg-cyan-100 border-none transition-all duration-300">Download Resume</a>
                    <div className='flex gap-6 my-6 text-3xl mx-auto md:mx-0 w-24'>
                        <a href="https://www.linkedin.com/in/al-zami/" target='_blank'><FaLinkedin/></a>
                        <a href="https://github.com/alzamo12" target='_blank'><FaGithub/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero