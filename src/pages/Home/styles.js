import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
`;

export const ProjectItem = styled.div`
  text-transform: uppercase;
  padding-bottom: 25px;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
