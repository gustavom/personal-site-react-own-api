import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import unsplash from '~/services/unsplash';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    async function loadImage() {
      try {
        const { data } = await unsplash.get(
          `/photos/random?query=design&orientation=portrait&client_id=122898b9628a2ce0bbae59c6fc30e04ff745ff7bb6e826ca539ffd1bcbe74a04`
        );
        console.log('unsplash', data.urls);
        console.log('unsplash', data.urls.regular);
        setBgImage(data.urls.regular);
      } catch (err) {
        console.log('deu ruim');
      }
    }
    loadImage();
  });
  return (
    <Wrapper className="auth" style={{ backgroundImage: `url(${bgImage})` }}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
