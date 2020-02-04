import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

export default function ProjectsEdit({ history, match }) {
  // const { id } = match.params;

  const id = useMemo(() => match.params.id, [match.params.id]);

  const [project, setProject] = useState(null);

  const [bannerInfo, setBannerInfo] = useState('');

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await api.get(`projects/id/${id}`);
        setProject({
          ...data,
        });
        setBannerInfo(data.banner.url);
        console.log('bannerInfo', bannerInfo);
      } catch (err) {
        toast.error('Project not found');
        history.push('/');
      }
    }
    console.log(id);
    loadProject();
  }, [id]);

  async function handleSubmit(data) {
    try {
      // console.log(data);

      await api.put(`projects/${id}`, data);
      history.push(`/projects/${id}`);
      toast.success('Projeto editado com sucesso!');
      // history.push(`/projects/${response.data.id}`);
    } catch (err) {
      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  async function handleDelete(data) {
    // const {id} = re
    if (
      window.confirm(
        `Você realmente quer deletar o projeto:\n"${project.name}" ?`
      )
    ) {
      console.log(`Deletando o projeto ${id}`);
      await api.delete(`projects/${id}`);
      toast.error('Projeto Deletado!');
      history.push('/projetos-list');
    }
    console.log(id);
  }

  return (
    <Container>
      <Form initialData={project} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" urlImg={bannerInfo} />

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
