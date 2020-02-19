import React from 'react';

import { Wrapper, Container, AboutContainer } from './styles';

export default function About() {
  return (
    <Wrapper>
      <Container>
        <h1>About</h1>
        <AboutContainer>
          <p>Hello!</p>
          <p>
            I'm Gustavo Martusewicz, front-end developer. <br />I currently work
            at PUC-SP, one of the most important universities in Brazil.
          </p>
          <p>
            I have more than 10 years of experience, going from the time of
            webmaster, webdesigner, html + css kid, layout cutter and a few
            other names.
          </p>
          <p>
            I currently work maintaining and evolving the university's main
            portal and its side projects.
          </p>
          <p>
            I made this personal site to show a little of what I did to the
            world and also to train (this site has a content manager made by
            myself in node, ask me what I talk about more) this wonderful lib
            that is React JS.
          </p>
          <p>Feel free to browse, look and evaluate!</p>
          <p>Thanks!</p>
        </AboutContainer>
      </Container>
    </Wrapper>
  );
}
