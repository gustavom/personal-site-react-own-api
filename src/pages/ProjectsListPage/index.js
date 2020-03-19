import React from 'react';

import ProjectsListComponent from '~/components/ProjectsListComponent';

// import Tumblr from '~/components/TumblrProjects';

import { ContainerProjetos } from './styles';

export default function ProjectsListPage() {
  return (
    <ContainerProjetos>
      <h2>Projetos</h2>
      <ProjectsListComponent />
      {/* <Tumblr /> */}
    </ContainerProjetos>
  );
}
