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
        </ul>
      </nav>
      <span>@2020</span>
    </Container>
  );
}
