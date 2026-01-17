import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // --- 1. PROJECTS DATA (പഴയത് തന്നെ) ---
  const projects = [
    {
      id: 1,
      title: "VG Digital E-commerce",
      tech: "React, Django & Docker",
      desc: "A full-stack e-commerce platform with shopping cart, user authentication, and payment integration.",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Node.js & MongoDB API",
      tech: "Node.js, Express & MongoDB",
      desc: "Scalable REST API with database connectivity, containerized using Docker for easy deployment.",
      color: "bg-success"
    },
    {
      id: 3,
      title: "Flask CSV Analyzer",
      tech: "Python Flask & Pandas",
      desc: "Data Science tool to upload CSV files and generate automatic analysis and reports.",
      color: "bg-warning text-dark"
    },
    {
      id: 4,
      title: "Laravel Management App",
      tech: "PHP Laravel & MySQL",
      desc: "CRUD application for managing records, built with a Dockerized Nginx and MySQL environment.",
      color: "bg-danger"
    },
    {
      id: 5,
      title: "Content Management System",
      tech: "WordPress & Docker",
      desc: "Fully functional CMS setup utilizing Docker containers for rapid deployment.",
      color: "bg-info text-dark"
    }
  ];

  // --- 2. EXPERIENCE DATA (പുതിയ മാറ്റം വരുത്തിയത്) ---
  const experience = [
    {
      id: 1,
      // [English] Current Role
      // <മലയാളം> പുതിയ കരിയർ (Software)
      year: "2026 - Present",
      role: "Full Stack Developer (Trainee)",
      company: "Self-Learning / Portfolio Projects",
      desc: "Building enterprise-level applications using Python, React, and Docker. Transitioning from hardware service to software development."
    },
    {
      id: 2,
      // [English] Samsung Experience
      // <മലയാളം> സാംസങ് എക്സ്പീരിയൻസ്
      year: "2020 - 2026",
      role: "Service Engineer",
      company: "Samsung Service",
      desc: "Worked as a Field Engineer handling technical troubleshooting, customer support, and hardware maintenance for Samsung electronics."
    },
    {
      id: 3,
      // [English] Reliance Experience
      // <മലയാളം> റിലയൻസ് റെസ്ക്യൂ
      year: "2018 - 2019",
      role: "Service Engineer",
      company: "Reliance ResQ",
      desc: "Provided technical support and service solutions for consumer electronics and home appliances."
    },
    {
      id: 4,
      // [English] First Job (Corrected)
      // <മലയാളം> ആദ്യത്തെ ജോലി (മാറ്റം വരുത്തിയത്: Patch Cord Manufacturing)
      year: "2016 - 2018",
      role: "Machine Operator",
      company: "Patch Cord Manufacturing Co.",
      desc: "Operated machinery for patch cord production, ensuring high-quality standards in cable assembly and manufacturing."
    }
  ];

  return (
    <div className="bg-light min-vh-100 font-sans-serif">

      {/* --- HEADER --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow sticky-top">
        <div className="container">
          <span className="navbar-brand h1 fw-bold mb-0 fs-3">Vishnu VS</span>
          <div className="ms-auto">
            <a href="#projects" className="btn btn-outline-light btn-sm me-2">Projects</a>
            <a href="#experience" className="btn btn-primary btn-sm">Experience</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="container mt-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 py-5 text-center text-lg-start">
            <h1 className="display-4 fw-bold text-dark">
              Hi, I'm <span className="text-primary">Vishnu VS</span>
            </h1>
            <h3 className="fw-light text-muted mb-4">Full Stack Developer & Ex-Service Engineer</h3>
            <p className="lead text-secondary">
              A tech professional with <strong>10 years of experience</strong> in technical domains.
              Now specializing in building modern web applications with <strong>React, Python, and Docker</strong>.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
               <a href="#projects" className="btn btn-primary btn-lg px-4 shadow-sm">View My Work</a>
               <a href="https://github.com/dev-vishnu-vs" target="_blank" rel="noreferrer" className="btn btn-dark btn-lg px-4 shadow-sm">GitHub Profile</a>
            </div>
          </div>
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            {/* Placeholder for your photo */}
            <img
              src="https://via.placeholder.com/400"
              alt="Vishnu VS"
              className="img-fluid rounded-circle shadow-lg border border-5 border-white"
              style={{width: "300px", height: "300px", objectFit: "cover"}}
            />
          </div>
        </div>
      </div>

      {/* --- EXPERIENCE SECTION --- */}
      <div id="experience" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5 fw-bold"><span className="border-bottom border-primary border-3">My Professional Journey</span></h2>
            <div className="list-group shadow">
              {experience.map((item) => (
                <div key={item.id} className="list-group-item p-4 border-0 border-bottom">
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                    <h5 className="mb-1 fw-bold text-dark">{item.role}</h5>
                    <small className="text-primary fw-bold">{item.year}</small>
                  </div>
                  <h6 className="mb-2 text-muted fst-italic">{item.company}</h6>
                  <p className="mb-1 text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PROJECTS SECTION --- */}
      <div id="projects" className="container py-5">
        <h2 className="text-center mb-5 fw-bold"><span className="border-bottom border-primary border-3">Featured Projects</span></h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card h-100 shadow border-0 hover-up" style={{transition: "transform 0.3s"}}>
                <div className={`card-header ${project.color} text-white fw-bold text-center py-3`}>
                  {project.tech}
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="card-text text-muted small">{project.desc}</p>
                </div>
                <div className="card-footer bg-white border-0 text-center pb-4">
                  <a href="#" className="btn btn-outline-primary btn-sm px-4 rounded-pill">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0 small opacity-75">© 2026 Vishnu VS | Full Stack Developer Portfolio</p>
      </footer>

    </div>
  );
}

export default App;