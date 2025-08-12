import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub  } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";


const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-black text-6xl bg-white rounded-full p-3" /> },
    { name: "MongoDB", icon: <BiLogoMongodb className="text-green-500 text-6xl" /> },
    { name: "Github", icon: <FaGithub className=" text-6xl" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="">
            <div className=" mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="card bg-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 rounded-xl"
                            style={{ minHeight: "180px" }}
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
