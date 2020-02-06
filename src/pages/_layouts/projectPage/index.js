import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function ProjectPageLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content className="ProjectPageLayout">{children}</Content>
      <Footer />
    </Wrapper>
  );
}

ProjectPageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
