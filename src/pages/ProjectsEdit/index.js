import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

export default function ProjectsEdit({ match }) {
  const { id } = match.params;

  const [project, setProject] = useState(null);

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await api.get(`projects/id/${id}`);
        setProject({
          ...data,
        });
      } catch (err) {
        toast.error('Project not found');
        history.push('/');
      }
    }

    loadProject();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put('projects', data);
      toast.success('Projeto criado com sucesso!');
      // history.push(`/projects/${response.data.id}`);
    } catch (err) {
      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  async function handleDelete(data) {
    // const {id} = re
    if (
      window.confirm(
        `Você realmente quer deletar o projeto ${id} ${project.name}?`
      )
    ) {
      window.open('sair.html', 'Obrigado pela visita!');
    }
    console.log(id);
  }

  return (
    <Container>
      {console.log(project)}
      <Form initialData={project} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="name" placeholder="Nome do Projeto" />
        <Input name="url_external" placeholder="Url do projeto" />

        <Input multiline name="description" placeholder="Descrição" />

        <button type="submit">Editar Projeto</button>
      </Form>
      <button type="button" onClick={handleDelete}>
        Deletar Projeto
      </button>
    </Container>
  );
}
