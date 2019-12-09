import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { Container } from './styles';
import { MdEdit } from 'react-icons/md';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');
      const data = response.data.map(project => {
        return project;
      });
      setProjects(data);
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
            <th className="edit">editar</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>
                <Link to={`/project/${project.id}/edit`}>{project.name}</Link>
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
