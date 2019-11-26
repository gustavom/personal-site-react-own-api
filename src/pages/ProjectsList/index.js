import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container } from './styles';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');
      const data = response.data.map(project => {
        return project;
      });
      setProjects(data);
    }
    loadProjects();
  }, []);
  return (
    <Container>
      <h1>Projetos</h1>
      {projects.map(project => (
        <div key={project.id}>
          <Link to={`/project/${project.id}/edit`}>{project.name}</Link>
        </div>
      ))}
    </Container>
  );
}
