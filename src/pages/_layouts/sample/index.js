import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function SampleLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}

SampleLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
