import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

export default function ProjectsAdd() {
  async function handleSubmit(data) {
    try {
      const response = await api.post('projects', data);
      toast.success('Projeto criado com sucesso!');
      // history.push(`/projects/${response.data.id}`);
    } catch (err) {
      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="name" placeholder="Nome do Projeto" />
        <Input name="url_external" placeholder="Url do projeto" />

        <Input multiline name="description" placeholder="Descrição" />

        <button type="submit">Adicionar Projeto</button>
      </Form>
    </Container>
  );
}
