import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects") // Use your backend API endpoint
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h1>Projects List</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => <li key={project.id}>{project.name}</li>)
        ) : (
          <p>Loading projects...</p>
        )}
      </ul>
    </div>
  );
};

export default Projects;
