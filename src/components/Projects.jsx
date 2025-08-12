import { useEffect, useState } from "react";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <section id="projects" className=" w-full ">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        {projects.map((project) => (
          <div key={project?.id} className="card bg-cyan-100 shadow-xl w-full px-5">
            <figure className="py-5 rounded-2xl"><img className="w-full h-60 md:h-52 lg:h-40 xl:h-60 rounded-2xl" src={project?.image} alt={project?.name} /></figure>
            <div className="card-body pt-2 px-0">
              <h3 className="card-title">{project?.name}</h3>
              <div className="card-actions justify-end">
                {/* <Link to={`/project/${project.id}`} className="btn btn-outline">View More / Details</Link> */}
              <Link to={`/project/${project.id}`} className="btn bg-cyan-50 border-none">View More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;