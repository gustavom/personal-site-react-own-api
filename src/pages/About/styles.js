import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  header,
  footer {
    position: relative;
  }
`;
export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100%; */
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: solid 3px #222;
    width: 100%;
    font-size: 45px;
    padding-bottom: 15px;
    margin-bottom: 45px;
    animation: fade-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;
  }
  @media (max-width: 550px) {
    h1 {
      font-size: calc(100vw / 10);
    }
  }
`;

export const AboutContainer = styled.div`
  padding: 0 37px 30px;
  padding-left: 50%;
  animation: fade-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s both;
  p {
    font-size: 18px;
    line-height: 2;
  }
  @media (max-width: 550px) {
    padding: 0 37px 30px;
  }
`;
