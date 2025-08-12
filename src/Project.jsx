import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Project = () => {
  const paramse = useParams();
  // console.log(paramse)
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // console.log(id)
        const project = data.find(p => p.id === parseInt(paramse.id));
        setProject(project)
        setLoading(false)
      })
  }, [paramse])

  if (loading) return <span className="loading loading-lg"></span>
  console.log(project)

  return (
    <div className="px-4 pb-14 lg:pb-0 pt-32 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl bg-cyan-50 grid my-auto text-black mx-auto shadow-lg rounded-2xl p-6 md:p-10">

        {/* Project name */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 ">{project?.name}</h1>

        {/* Tech Stack */}
        <section className="mb-6 ">
          <h2 className="text-xl font-semibold mb-2">Main Technology Stack Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {
              project?.technologies.map(t => <span className="badge w-full bg-emerald-100 font-bold py-4">{t}</span>)
            }
          </div>
        </section>

        {/* Description */}
        <section className="mb-6 ">
          <h2 className="text-xl font-semibold mb-2">Brief Description</h2>
          <p className="text-gray-600">{project?.description}</p>
        </section>

        {/* Links */}
        <section className="mb-6 space-y-2 w-3xs">
          <h2 className="text-xl font-semibold">Links</h2>
          <a
            href={project?.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Project
          </a>
          <a
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub Repository (Client)
          </a>
        </section>

        <section className="flex flex-col md:flex-row justify-between">
          {/* Challenges */}
          <section className="mb-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Challenges Faced</h2>
            <ul className="space-y-4">
              {project?.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaExclamationCircle className="text-red-500 w-6 h-6 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>        </section>

          {/* Future Plans */}
          <section className="w-full">
            <h2 className="text-xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
            <ul className="space-y-4">
              {project?.futurePlans.map((plan, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{plan}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Project;
