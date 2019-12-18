import React from 'react';
import PropTypes from 'prop-types';

import HeaderDashBoard from '~/components/HeaderDashBoard';

import { Wrapper } from './styles';

export default function Defaultlayout({ children }) {
  return (
    <Wrapper>
      <HeaderDashBoard />
      {children}
    </Wrapper>
  );
}

Defaultlayout.propTypes = {
  children: PropTypes.element.isRequired,
};
