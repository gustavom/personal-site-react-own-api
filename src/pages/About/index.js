import React from 'react';

import { Wrapper, Container, AboutContainer } from './styles';

export default function About() {
  return (
    <Wrapper>
      <Container>
        <h1>About</h1>
        <AboutContainer>
          <p>Olá!</p>
          <p>
            Sou Gustavo Martusewicz, desenvolvedor front-end.
            <br />
            Atualmente trabalho na PUC-SP, uma das universidades mais
            importantes do Brasil.
          </p>
          <p>
            Tenho mais de 10 anos de experiência na área, desde webmaster,
            webdesigner, garoto do html + css , cortador de layout e outros
            nomes.
          </p>
          <p>
            Eu criei este site pessoal para mostrar um pouco do que fiz ao mundo
            e também para treinar (este site possui um gerenciador de conteúdo
            feito por mim com NodeJs, se me perguntar, podemos falar mais sobre
            isso) essa maravilhosa lib que é o React JS.
          </p>
          <p>Sinta-se livre para navegar, olhar e avaliar!</p>
          <p>Obrigado!</p>
        </AboutContainer>
      </Container>
    </Wrapper>
  );
}
