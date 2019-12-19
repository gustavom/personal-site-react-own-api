import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ layoutchange }) {
  return (
    <Container className={layoutchange}>
      <h1>
        <Link to="/">Gustavo Martusewicz</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
