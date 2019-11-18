import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {
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
      <h1>Dashboard</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.name}</h3>
        </div>
      ))}
    </Container>
  );
}
