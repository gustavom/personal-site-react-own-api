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
          position: relative;
          margin-left: 30px;
          animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.2s
            both;
          &:before {
            content: '';
            position: absolute;
            display: block;
            width: 5px;
            height: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            margin-right: 15px;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            margin-left: -19px;
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
  @media (max-width: 650px) {
    nav {
      display: none;
      &.isOpen {
        display: block;
        outline: solid 1px #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        ul {
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          li {
            margin: 0;
            font-size: 45px;
            font-weight: 700;
            color: #fff !important;
            animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)
              0.2s both;
            a {
              color: #fff !important;
            }
            &:before {
              display: none;
            }
            & + li {
              margin-top: 30px;
            }
          }
        }
      }
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

export const MobileTrigger = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 9999;
  margin-top: 5px;
  margin-right: 25px;
  animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
  & > span {
    position: relative;
    display: block;
    width: 40px;
    height: 2px;
    background-color: #000;
    &:before,
    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #000;
      left: 0;
      transform-origin: center;
      transition: all 0.2s linear;
    }
    &:before {
      top: 0;
      margin-top: -10px;
    }
    &:after {
      bottom: 0;
      margin-bottom: -10px;
    }
  }
  @media (max-width: 650px) {
    display: flex;
  }
  &.isOpen {
    span {
      background-color: transparent;
      &:before {
        background-color: #fff;
        transform: rotate(45deg);
        margin: 0;
      }
      &:after {
        background-color: #fff;
        margin: 0;
        transform: rotate(-45deg);
      }
    }
  }
  .white & {
    position: fixed;
    span {
      background-color: #fff;
      &:before,
      &:after {
        background-color: #fff;
      }
    }
  }
  .white &.isOpen {
    position: fixed;
    span {
      background-color: transparent;
      &:before,
      &:after {
        background-color: #fff;
      }
    }
  }
  .black & {
    position: fixed;
    span {
      background-color: #000;
      &:before,
      &:after {
        background-color: #000;
      }
    }
  }
  .black &.isOpen {
    span {
      background-color: transparent;
      &:before,
      &:after {
        background-color: #fff;
      }
    }
  }
`;
