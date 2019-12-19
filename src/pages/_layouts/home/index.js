import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Header from '~/components/Header';

export default function HomeLayout({ children }) {
  const [scroll, setScroll] = useState(0);
  const [headerLayout, setHeaderLayout] = useState('white');

  function handleScroll() {
    if (
      document.documentElement.scrollTop >=
      document.documentElement.clientHeight - 20
    ) {
      setScroll(document.documentElement.clientHeight);
      setHeaderLayout('black');
    } else {
      setScroll(document.documentElement.clientHeight);
      setHeaderLayout('white');
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <Wrapper>
      <Header layoutchange={headerLayout} />
      <Content>{children}</Content>
    </Wrapper>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
