const Projects = () => {
  const projects = [
    { id: 1, name: 'Portfolio Website', image: '/project1.jpg' },
    { id: 2, name: 'E-commerce App', image: '/project2.jpg' },
    { id: 3, name: 'Chat Application', image: '/project3.jpg' }
  ];

  return (
    <section id="projects" className="p-10 bg-base-100">
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-200 shadow-xl">
            <figure><img src={project.image} alt={project.name} /></figure>
            <div className="card-body">
              <h3 className="card-title">{project.name}</h3>
              <div className="card-actions justify-end">
                <a className="btn btn-primary">View More / Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;