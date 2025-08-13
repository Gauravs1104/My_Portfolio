import React from 'react';

function Projects() {
  return (
    <section className="fifthsection" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <h2>Hospital Management System</h2>
          <p>Developed a Java-based hospital management application using IntelliJ IDEA and MySQL. The system streamlines hospital operations by enabling patient registration, updating patient details, room availability checks, employee and department management, ambulance service tracking, and discharge processing. Implemented a user-friendly interface, robust database integration, and efficient CRUD operations to ensure reliability and scalability.</p>
        </div>
        <div className="project-card">
          <h2>E-commerce Website</h2>
          <p>Built a responsive and interactive online shopping platform using Vite, HTML, CSS, and JavaScript. Features include dynamic product listings, category filtering, a shopping cart system, and smooth navigation for an engaging user experience. Optimized for fast load times and scalability with a modern frontend development workflow.</p>
        </div>
        <div className="project-card">
          <h2>Next-Generation Deep Signature Framework for Analyzing Financial Data</h2>
          <p>Designed and implemented an advanced analytical framework leveraging deep learning techniques to identify, extract, and interpret complex patterns in financial datasets. The system enhances decision-making by providing accurate trend predictions, anomaly detection, and actionable insights, ensuring robustness, scalability, and high performance in financial data analysis.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
