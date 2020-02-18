import React from 'react';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gustavo-martusewicz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:gustavo_crj@hotmail.com?subject=I%2enjoyed%2that"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-mail
            </a>
          </li>
        </ul>
      </nav>
      <span>© Gustavo M.</span>
    </Container>
  );
}
