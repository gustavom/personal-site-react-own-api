import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { toast } from 'react-toastify';

import { Container, ProjectItem } from './styles';

import Loader from '~/components/Loader';

export default function ProjectsListComponent() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await api.get('projects');
        const data = response.data.map(project => {
          return project;
        });
        setProjects(data);
        setLoading(false);
        // setLoading(true);
      } catch (err) {
        toast.error('Projects not found');
      }
    }
    loadProjects();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        projects.map(project => (
          <ProjectItem key={project.id}>
            <Link to={`projeto/${project.slug}`}>
              <h3>{project.name}</h3>
              {/* <img src={project.banner.url} /> */}
            </Link>
          </ProjectItem>
        ))
      )}
    </Container>
  );
}
