import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { MdHome, MdCollections } from 'react-icons/md';

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <ul className="cards-list">
        <li>
          <Link to="/">
            <MdHome size={48} color="rgba(0, 0, 0, .7)" />
            <span>Home Page</span>
          </Link>
        </li>
        <li>
          <Link to="/projetos-list">
            <MdCollections size={48} color="rgba(0, 0, 0, .7)" />
            <span>Projetos</span>
          </Link>
        </li>
        <li>
          <Link to="/project/new">
            <MdCollections size={48} color="rgba(0, 0, 0, .7)" />
            <span>Projetos +</span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
