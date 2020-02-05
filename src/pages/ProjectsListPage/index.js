import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { ContainerProjetos, ProjectList, ProjectItem } from './styles';

export default function ProjectsListPage() {
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
    <ContainerProjetos>
      <h2>Projetos</h2>
      <ProjectList>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <Link to={`project/${project.slug}`}>
              <h3>{project.name}</h3>
              {/* <img src={project.banner.url} /> */}
            </Link>
          </ProjectItem>
        ))}
      </ProjectList>
    </ContainerProjetos>
  );
}
