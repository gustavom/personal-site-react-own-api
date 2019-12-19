import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &.home-about {
    background-color: #222;
    color: #fff;
    h1 {
      text-transform: uppercase;
    }
    a {
      color: #fff;
      padding: 8px 16px;
      border: solid 1px #fff;
      border-radius: 90px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
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
