import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Wrapper, Container, ProjectItem } from './styles';

export default function Home() {
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
    <Wrapper>
      <Container className="home-about">
        <h1>Front-end developer</h1>
        <a
          href="https://www.linkedin.com/in/gustavo-martusewicz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </Container>

      <Container>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <Link to={project.slug}>
              <h3>{project.name}</h3>
              {/* <img src={project.banner.url} /> */}
            </Link>
          </ProjectItem>
        ))}
      </Container>
    </Wrapper>
  );
}
