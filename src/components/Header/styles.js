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
    letter-spacing: 2.5px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
    a {
      color: inherit;
    }
  }
  nav {
    ul {
      li {
        text-transform: uppercase;
        font-size: inherit;
        letter-spacing: 2.5px;
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
