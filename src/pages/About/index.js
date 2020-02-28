import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import api from '~/services/api';
import { toast } from 'react-toastify';

import { Wrapper, Container, AboutContainer } from './styles';
import Loader from '~/components/Loader';

export default function About({ history }) {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(null);

  useEffect(() => {
    async function loadAbout() {
      try {
        const { data } = await api.get(`institucional/sobre`);
        console.log('1', data);
        setAbout({
          ...data,
        });
        console.log('2', about);
        setLoading(false);
        // setLoading(true);
      } catch (err) {
        toast.error('Project not found');
        // history.push('/');
      }
    }
    loadAbout();
  }, [slug, history]);

  return (
    <Wrapper>
      <Container>
        <h1>Sobre</h1>

        {loading ? (
          // <div className="loading">carregando...</div>
          <AboutContainer>
            <Loader />
          </AboutContainer>
        ) : (
          <AboutContainer>
            {/* <p>Olá!</p>
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
          <p>Obrigado!</p> */}
            <p>{about.content}</p>
          </AboutContainer>
        )}
      </Container>
    </Wrapper>
  );
}
