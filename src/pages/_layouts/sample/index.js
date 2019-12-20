import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';

export default function SampleLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

SampleLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
