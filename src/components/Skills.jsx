import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "Database", icon: <FaDatabase className="text-indigo-500 text-6xl" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16">
            <div className=" mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 rounded-xl"
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
