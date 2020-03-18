import React, { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';
import api from '~/services/api';
import { toast } from 'react-toastify';

import { Wrapper, Container, AboutContainer } from './styles';
import Loader from '~/components/Loader';

export default function Tumblr({ history }) {
  // const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [tumblr, setTumblr] = useState(null);

  useEffect(() => {
    async function loadTumblr() {
      try {
        const response = await api.get(`tumblr`);
        // console.log('1', data);
        const data = response.data.map(project => {
          return project;
        });
        console.log(data);
        setTumblr(data);
        // console.log('2', data);
        setLoading(false);
        // setLoading(true);
      } catch (err) {
        toast.error('Project not found');
        // history.push('/');
      }
    }
    loadTumblr();
  }, [history]);

  return (
    <Wrapper>
      <Container>
        <h1>Outros projetos</h1>

        {loading ? (
          // <div className="loading">carregando...</div>
          <AboutContainer>
            <Loader />
          </AboutContainer>
        ) : (
          <AboutContainer>
            {tumblr.map(post => (
              <img
                key={post.image_permalink}
                src={post.photos[0].original_size.url}
              />
            ))}
          </AboutContainer>
        )}
      </Container>
    </Wrapper>
  );
}
