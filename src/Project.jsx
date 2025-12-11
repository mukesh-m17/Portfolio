function Projects() {
  const projects = [
    {
      title: "📝 Note Pad ",
      description:
        "A modern and user-friendly Notepad web app.Built using the HTML, CSS and JavaScript",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    },
    {
      title: "✅ Simple To-Do List",
      description:
        "A minimal To-Do List web app that helps users organize daily tasks. Built using HTML, CSS and JavaScript with clean UI and smooth interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "https://cdn-icons-png.flaticon.com/512/2620/2620944.png",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        Here’s one of my favorite creations — blending creativity with frontend magic ✨
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
