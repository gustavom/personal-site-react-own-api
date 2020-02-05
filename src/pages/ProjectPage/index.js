import React, { useState, useEffect, useMemo } from 'react';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import api from '~/services/api';

import { Container } from './styles';

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
        <>
          <h1>{project.name}</h1>
          <img src={project.banner.url} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url_external} target="_blank">
            Ver projeto
          </a>
          {console.log('projeto', project)}
        </>
      )}
    </Container>
  );
}
