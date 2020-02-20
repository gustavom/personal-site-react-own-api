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
    ul {
      display: flex;
      li {
        font-family: 'Syncopate', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        text-transform: uppercase;
        font-size: inherit;
        letter-spacing: 5px;
        position: relative;
        display: flex;
        align-items: center;
        animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1s
          both;
        &:after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: currentColor;
          height: 1px;
          width: 100%;
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }
        & + li {
          margin-left: 15px;
          animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.2s
            both;
          &:before {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            margin-right: 15px;
          }
        }
        &:hover {
          &:after {
            opacity: 0.8;
          }
        }
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
  @media (max-width: 600px) {
    h1 {
      font-size: 0;
      a {
        &:before {
          content: 'G.';
          font-size: 14px;
        }
      }
    }
  }
`;
