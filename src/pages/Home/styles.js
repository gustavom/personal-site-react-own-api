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
    /* background-color: #222; */
    background-color: #000;
    color: #fff;
    overflow: hidden;
    h1 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 45px;
      font-size: calc(100vw / 29);
      text-align: right;
      /* transform-origin: 0 0;
      transform: rotate(90deg);
      position: absolute;
      right: 0;
      top: 0; */
      /* animation: slide-in-right 1.5s cubic-bezier(0.86, 0, 0.07, 1) both; */
      animation: fade-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
  @media (max-width: 650px) {
    &.home-about {
      h1 {
        font-size: 40px;
        line-height: 2;
      }
    }
  }
  @media (max-width: 550px) {
    &.home-about {
      h1 {
        font-size: 35px;
        line-height: 2;
      }
    }
  }
  @media (max-width: 500px) {
    &.home-about {
      h1 {
        font-size: 30px;
        line-height: 2;
      }
    }
  }
  @media (max-width: 400px) {
    &.home-about {
      h1 {
        font-size: 25px;
        line-height: 2;
      }
    }
  }
`;

function template(i, duration) {
  let $value = 0.5 + (1 / 20) * i;
  return `
      &:nth-child(${i + 1}) {
        animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) ${$value}s both;

       }
    `;
  // return `
  //     &:nth-child(${i + 1}) {
  //       animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.${duration +
  //         i}s both;

  //      }
  //   `;
}

function getAnimations() {
  let str = '';
  for (let index = 0; index < 10; index += 1) {
    str += template(index, index);
  }
  return str;
}

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
  ul {
    opacity: 0;
  }
  &.noAnimation {
    h2,
    ul {
      opacity: 0;
    }
  }
  &.animateNow {
    h2 {
      animation: fade-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s
        both;
    }
    ul {
      animation: fade-in-bottom 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.4s
        both;
      li {
        ${getAnimations()}
      }
    }
  }
  @media (max-width: 550px) {
    h2 {
      font-size: calc(100vw / 12);
    }
  }
`;
