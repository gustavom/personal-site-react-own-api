import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function HomeLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
