import React from 'react';

import ProjectsListComponent from '~/components/ProjectsListComponent';

import { ContainerProjetos } from './styles';

export default function ProjectsListPage() {
  return (
    <ContainerProjetos>
      <h2>Projetos</h2>
      <ProjectsListComponent />
    </ContainerProjetos>
  );
}
