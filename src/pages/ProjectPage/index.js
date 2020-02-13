import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import api from '~/services/api';

import {
  Container,
  ProjectDetailContainer,
  InfoContainer,
  ImageContainer,
} from './styles';

export default function ProjectPage({ history, match }) {
  // const slug = useMemo(() => match.params.slug, [match.params.slug]);
  // const { slug } = match.params;
  const { slug } = useParams();
  console.log(slug);

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await api.get(`projects/${slug}`);
        console.log('1', data);
        setProject({
          ...data,
        });
        console.log('2', data);
        setLoading(false);
      } catch (err) {
        toast.error('Project not found');
        history.push('/projects');
      }
    }
    loadProject();
  }, [slug]);

  return (
    <Container>
      {loading ? (
        <div className="loading">carregando...</div>
      ) : (
        <ProjectDetailContainer>
          <InfoContainer>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </InfoContainer>
          <ImageContainer
            style={{ backgroundImage: `url(${project.banner.url})` }}
          >
            <a href={project.url_external} target="_blank">
              {/* <img src={project.banner.url} alt={project.name} /> */}
            </a>
          </ImageContainer>
        </ProjectDetailContainer>
      )}
    </Container>
  );
}
