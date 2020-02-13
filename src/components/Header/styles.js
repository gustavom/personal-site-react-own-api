import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 15px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  z-index: 10;
  font-size: 14px;
  h1 {
    text-transform: uppercase;
    font-size: inherit;
    letter-spacing: 5px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Syncopate', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.9s both;
    a {
      color: inherit;
    }
  }
  nav {
    animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
    ul {
      li {
        font-family: 'Syncopate', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        text-transform: uppercase;
        font-size: inherit;
        letter-spacing: 5px;
      }
    }
  }
  &.white {
    /* color: #fff; */
    color: rgba(255, 255, 255, 0.8);
    h1 {
      color: inherit;
      a {
        color: inherit;
      }
    }
    a {
      color: inherit;
    }
  }
`;
