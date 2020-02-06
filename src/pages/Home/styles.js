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
  align-items: flex-end;

  &.home-about {
    background-color: #222;
    color: #fff;
    h1 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 45px;
      /* transform-origin: 0 0;
      transform: rotate(90deg);
      position: absolute;
      right: 0;
      top: 0; */
    }
    a {
      padding: 8px 16px;
      margin-top: 15px;
      color: #fff;
      font-size: 11px;
      border: solid 1px #fff;
      border-radius: 90px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`;
export const ContainerProjetosHome = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  padding: 100px 15px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: solid 3px #222;
    width: 100%;
    font-size: 45px;
    padding-bottom: 15px;
    margin-bottom: 45px;
  }
`;
