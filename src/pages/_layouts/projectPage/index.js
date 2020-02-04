import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';

export default function ProjectPageLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content className="ProjectPageLayout">{children}</Content>
    </Wrapper>
  );
}

ProjectPageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
