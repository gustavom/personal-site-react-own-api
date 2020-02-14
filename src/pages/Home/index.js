import React, { useState, useEffect } from 'react';

import ProjectListComponent from '~/components/ProjectsListComponent';

import { Wrapper, Container, ContainerProjetosHome } from './styles';

import VisibilitySensor from 'react-visibility-sensor';
// https://alligator.io/react/components-viewport-react-visibility-sensor/

export default function Home() {
  const [projectsViz, setProjectsViz] = useState(false);

  function onChange(isVisible) {
    setProjectsViz(isVisible);
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

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
