import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container } from './styles';
import { MdEdit } from 'react-icons/md';

import { toast } from 'react-toastify';

export default function ProjectsList({ history }) {
  const [projects, setProjects] = useState([]);

  const [options, setOptions] = useState([]);

  // const options = [];

  // const projectStatus = [
  //   { id: true, title: 'Ativo' },
  //   { id: false, title: 'Desativado' },
  // ];

  async function handleOrder(
    e,
    id,
    name,
    description,
    url_external,
    banner_id
  ) {
    console.log(e.target.value);

    const data = {
      name: name,
      description: description,
      url_external: url_external,
      banner_id: banner_id,
      order: e.target.value,
    };
    // console.log(data);
    // console.log(id);
    // return e.target.value;

    try {
      console.log(data);
      await api.put(`projects/${id}`, data);

      history.push(`/projetos-list`);
      toast.success('Projeto editado com sucesso!');
    } catch (err) {
      console.log(err);
      console.log(data);

      toast.error(`Whoops! Internal server error.${err}`);
    }
  }

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects/all');
      const data = response.data.map(project => {
        return project;
      });
      setProjects(data);
      console.log(data);
      const newData = data.map(function(a) {
        return a.order;
      });
      setOptions(
        data.map(function(a) {
          return a.order;
        })
      );
      console.log(newData);
    }
    loadProjects();
  }, []);
  return (
    <Container>
      <h1>
        Projetos
        <Link to="/project/new">
          <span>adicionar +</span>
        </Link>
      </h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>Order</th>
            <th className="edit">editar</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>
                <Link to={`/project/${project.id}/edit`}>{project.name}</Link>
              </td>
              <td>
                <form>
                  <select
                    onChange={e =>
                      handleOrder(
                        e,
                        project.id,
                        project.name,
                        project.description,
                        project.url_external,
                        project.banner_id
                      )
                    }
                  >
                    <option>{project.order}</option>
                    {options.map((option, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </form>
              </td>
              <td className="edit">
                <Link to={`/project/${project.id}/edit`}>
                  <MdEdit size={20} color="#333333" />
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
