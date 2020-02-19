import styled from 'styled-components';

const size = {
  table: '920px',
};

export const Container = styled.div`
  width: 100%;
  /* max-width: 1100px; */
  /* height: 100vh; */
  margin: 0 auto;
  padding: 50px 15px 10px;
  h1 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    padding: 0 5px 10px;
    margin-bottom: 10px;
    border-bottom: solid 2px #222;
    word-break: break-all;
  }
  p {
    margin: 0;
    padding: 0 5px;
    white-space: pre-line;
    & + p {
      margin-top: 15px;
    }
  }
  @media (max-width: ${size.table}) {
    padding: 50px 0 10px;
  }
`;

export const ProjectDetailContainer = styled.div`
  display: flex;
  @media (max-width: ${size.table}) {
    flex-direction: column;
  }
`;
export const InfoContainer = styled.div`
  flex: 0 0 50%;
  padding: 15px 100px 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: red; */
  animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @media (max-width: ${size.table}) {
    flex: 0 0 100%;
    order: 2;
    padding: 50px 30px 0;
  }
`;
export const ImageContainer = styled.div`
  flex: 0 0 50%;
  min-height: 450px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 1px #efefef;
  animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${size.table}) {
    flex: 0 0 100%;
    order: 1;
  }
`;
