import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

export default function AboutEdit({ history, match }) {
  // const { id } = match.params;

  const id = useMemo(() => match.params.id, [match.params.id]);

  const [project, setProject] = useState(null);

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await api.get(`institucional/sobre`);
        setProject({
          ...data,
        });

        console.log('log de data', data);
        console.log('log de banner_id', data.banner_id);

        // console.log('bannerInfo', bannerInfo);
      } catch (err) {
        toast.error('Project not found');
        history.push('/dashboard');
      }
    }
    // console.log(id);
    loadProject();
  }, [id, history]);

  async function handleSubmit(data) {
    try {
      // console.log(data);

      console.log(data);
      await api.put(`institucional/sobre`, data);

      // history.push(`/projects/${id}`);
      history.push(`/`);
      toast.success('About editado com sucesso!');
      // history.push(`/projects/${response.data.id}`);
    } catch (err) {
      console.log(err);
      console.log(data);

      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  async function handleBack(data) {
    toast.error('Voltando!');
    history.push('/dashboard');
  }

  return (
    <Container>
      <Form initialData={project} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do Projeto" />

        <Input multiline name="content" placeholder="Descrição" />

        <button type="submit">Editar About</button>
      </Form>
      <button type="button" onClick={handleBack}>
        Voltar
      </button>
    </Container>
  );
}
