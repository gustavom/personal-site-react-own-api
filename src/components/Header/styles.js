import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 15px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  z-index: 10;
  h1 {
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
        font-size: 13px;
        letter-spacing: 2.5px;
      }
    }
  }
  &.white {
    color: #fff;
    h1 {
      color: rgba(255, 255, 255, 0.8);
      a {
        color: inherit;
      }
    }
    a {
      color: inherit;
    }
  }
`;
