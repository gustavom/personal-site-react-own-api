import React, { useState, useEffect } from 'react';

import ProjectListComponent from '~/components/ProjectsListComponent';

import { Wrapper, Container, ContainerProjetosHome } from './styles';

import VisibilitySensor from 'react-visibility-sensor';
// https://alligator.io/react/components-viewport-react-visibility-sensor/

import api from '~/services/api';
import { toast } from 'react-toastify';

export default function Home({ history }) {
  const [projectsViz, setProjectsViz] = useState(false);

  function onChange(isVisible) {
    setProjectsViz(isVisible);
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const { data } = await api.get(`institucional/sobre`);
        console.log('about 01', data);
        setAbout({
          ...data,
        });
        console.log('about 02', data);
        setLoading(false);
        // setLoading(true);
      } catch (err) {
        toast.error('Project not found');
        // history.push('/');
      }
    }
    async function loadProjetos() {
      try {
        const { data } = await api.get(`/projects/fsdfsfsad`);
        console.log('project 01', data);
        setAbout({
          ...data,
        });
        console.log('project 02', data);
        setLoading(false);
        // setLoading(true);
      } catch (err) {
        toast.error('Project not found');
        // history.push('/');
      }
    }
    loadAbout();
    loadProjetos();
  }, [history]);

  return (
    <Wrapper>
      <Container className="home-about">
        <h1>Front-end developer</h1>
        {/* <a
          href="https://www.linkedin.com/in/gustavo-martusewicz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a> */}
      </Container>

      <ContainerProjetosHome
        className={projectsViz ? 'animateNow' : 'noAnimation'}
      >
        <VisibilitySensor
          // partialVisibility
          // onChange={({ isVisible }) => {
          //   alert(projectsViz);
          //   setProjectsViz(false);
          // }}
          onChange={onChange}
        >
          <h2>Projetos</h2>
        </VisibilitySensor>
        <ProjectListComponent />
      </ContainerProjetosHome>
    </Wrapper>
  );
}
