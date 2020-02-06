import styled from 'styled-components';

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
    & + p {
      margin-top: 15px;
    }
  }
`;

export const ProjectDetailContainer = styled.div`
  display: flex;
`;
export const InfoContainer = styled.div`
  flex: 0 0 50%;
  padding: 15px 100px 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: red; */
`;
export const ImageContainer = styled.div`
  flex: 0 0 50%;
  min-height: 450px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 1px #efefef;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
