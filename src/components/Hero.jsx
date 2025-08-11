import React from 'react';
// import profile from '/profile.jpg';
import profile from "../assets/zami.jpg"
const Hero = () => {
    return (
        <section id="home" className="hero w-screen relative py-10 px-0  bg-base-200
        left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]
        ">
            <div className="hero-content px-0 max-w-screen-2xl w-full flex-col lg:flex-row-reverse justify-between">
                <img src={profile} className="max-w-sm rounded-full shadow-2xl" alt="Profile" />
                <div>
                    <h1 className="text-5xl font-bold">Frontend Developer</h1>
                    <p className="py-6">I build responsive, user-friendly web applications using modern technologies.</p>
                    <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero