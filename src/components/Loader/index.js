import React from 'react';

import { Container } from './styles';

export default function Loader() {
  return (
    <Container>
      <div className="lds-dual-ring"></div>
    </Container>
  );
}
