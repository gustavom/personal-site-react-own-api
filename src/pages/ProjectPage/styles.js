import styled from 'styled-components';

const size = {
  table: '1024px',
  mobileHi: '600px',
};

export const Container = styled.div`
  width: 100%;
  /* max-width: 1100px; */
  /* height: 100vh; */
  margin: 0 auto;
  /* padding: 50px 15px 10px; */
  padding: 50px 0 10px;
  h1 {
    color: #000;
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 5px;
    text-transform: uppercase;
    padding: 0 5px 10px;
    margin-bottom: 50px;
    border-bottom: solid 2px rgba(0, 0, 0, 0.5);
    /* word-break: break-all; */
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
  @media (max-width: ${size.mobileHi}) {
    h1 {
      word-break: break-all;
      font-size: 30px;
      font-size: calc(100vw / 20);
    }
  }
`;

export const ProjectDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 35px;
  /* @media (max-width: ${size.table}) {
    flex-direction: column;
  } */
`;
export const InfoContainer = styled.div`
  /* flex: 0 0 50%; */
  flex: 0 0 100%;
  order: 1;
  /* padding: 15px 100px 15px 0; */
  padding: 0 37px 90px;
  padding-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: red; */
  animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @media (max-width: ${size.table}) {
    /* flex: 0 0 100%; */
    /* order: 1; */
    /* padding: 0 30px 80px; */
    padding-left: 37px;
    max-width: 600px;
  }
`;
export const ImageContainer = styled.div`
  /* flex: 0 0 50%; */
  flex: 0 0 100%;
  order: 2;
  height: 450px;
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
    order: 2;
  }
`;
