import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, MobileTrigger } from './styles';

export default function Header({ layoutchange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleMobileMenu() {
    if (mobileOpen) {
      return setMobileOpen(false);
    }
    setMobileOpen(true);
  }
  return (
    <Container className={layoutchange}>
      <MobileTrigger
        className={mobileOpen ? 'isOpen' : 'isClosed'}
        onClick={handleMobileMenu}
      >
        <span></span>
      </MobileTrigger>
      <h1>
        <Link to="/">Gustavo Martusewicz</Link>
      </h1>
      <nav className={mobileOpen ? 'isOpen' : 'isClosed'}>
        <ul>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
