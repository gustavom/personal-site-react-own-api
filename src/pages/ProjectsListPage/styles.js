import styled from 'styled-components';

function template(i, duration) {
  let $value = 0.5 + (1 / 20) * i;
  return `
      &:nth-child(${i + 1}) {
        animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) ${$value}s both;

       }
    `;
}

function getAnimations() {
  let str = '';
  for (let index = 0; index < 10; index += 1) {
    str += template(index, index);
  }
  return str;
}

export const ContainerProjetos = styled.div`
  width: 100%;
  height: 100vh;
  /* height: 100%; */
  padding: 40px 15px 30px;
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
    animation: 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s 1 normal both
      running fade-in-bottom;
  }
  ul {
    animation: 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s 1 normal both
      running fade-in-bottom;
    li {
      ${getAnimations()}
    }
  }
  @media (max-width: 550px) {
    h2 {
      font-size: calc(100vw / 12);
    }
  }
`;
