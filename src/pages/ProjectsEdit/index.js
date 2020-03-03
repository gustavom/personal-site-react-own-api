import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

export default function ProjectsEdit({ history, match }) {
  // const { id } = match.params;

  const id = useMemo(() => match.params.id, [match.params.id]);

  const [project, setProject] = useState(null);

  const [bannerInfo, setBannerInfo] = useState('');

  const [bannerId, setBannerId] = useState('');

  const options = [
    { id: 1, title: '01' },
    { id: 2, title: '02' },
    { id: 3, title: '03' },
    { id: 4, title: '04' },
    { id: 5, title: '05' },
    { id: 6, title: '06' },
    { id: 7, title: '07' },
    { id: 8, title: '08' },
    { id: 9, title: '09' },
    { id: 10, title: '10' },
  ];

  const projectStatus = [
    { id: true, title: 'Ativo' },
    { id: false, title: 'Desativado' },
  ];

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await api.get(`projects/id/${id}`);
        setProject({
          ...data,
        });
        setBannerInfo(data.banner.url);
        setBannerId(data.banner_id);
        console.log('log de data', data);
        console.log('log de banner_id', data.banner_id);

        // console.log('bannerInfo', bannerInfo);
      } catch (err) {
        toast.error('Project not found');
        history.push('/');
      }
    }
    // console.log(id);
    loadProject();
  }, [id, history]);

  async function handleSubmit(data) {
    try {
      // console.log(data);

      console.log(data);
      console.log(data.banner_id);
      console.log(bannerId);
      if (data.banner_id === undefined) data.banner_id = bannerId;
      await api.put(`projects/${id}`, data);

      // history.push(`/projects/${id}`);
      history.push(`/projetos-list`);
      toast.success('Projeto editado com sucesso!');
      // history.push(`/projects/${response.data.id}`);
    } catch (err) {
      console.log(err);
      console.log(data);

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
        <Select name="order" options={options} placeholder="Ordem" />
        <Select name="status" options={projectStatus} placeholder="Status" />

        <button type="submit">Editar Projeto</button>
      </Form>
      <button type="button" onClick={handleDelete}>
        Deletar Projeto
      </button>
    </Container>
  );
}
