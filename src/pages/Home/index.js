import React from 'react';

import ProjectListComponent from '~/components/ProjectsListComponent';

import { Wrapper, Container, ContainerProjetosHome } from './styles';

// import VizSensor from 'react-visibility-sensor';
// https://alligator.io/react/components-viewport-react-visibility-sensor/

export default function Home() {
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

      <ContainerProjetosHome>
        <h2>Projetos</h2>
        <ProjectListComponent />
      </ContainerProjetosHome>
    </Wrapper>
  );
}
