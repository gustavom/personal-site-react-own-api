import React, { useEffect, useState } from 'react';

import tumblr from 'tumblr.js';

import { Container } from './styles';

export default function TumblrProjects() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      try {
        const client = tumblr.createClient({
          consumer_key: 'tdVUR79qGPMKEFboq1ZW2FZ7JQX0buaxuMa2ckIROZzAmUJ3aU',
        });

        await client.blogPosts('gustavom.tumblr.com', { limit: 200 }, function(
          err,
          data
        ) {
          console.log(data);
          return data;
        });

        // const data = response.data.map(project => {
        //   return project;
        // });
        // setPosts(data);
        // console.log('adddd', data);
        // console.log(data);
        // setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    loadPosts();
  });
  return (
    <>
      <h2>Tumblr</h2>
      <Container></Container>
    </>
  );
}
