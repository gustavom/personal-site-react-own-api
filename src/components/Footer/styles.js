import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #222;
  bottom: 0;
  left: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  font-family: 'Syncopate', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  ul {
    list-style: none;
    display: flex;
    li {
      &:nth-child(1) {
        animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.2s
          both;
      }
      &:nth-child(2) {
        animation: fade-in-left 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.8s
          both;
      }
      & + li {
        margin-left: 15px;
      }
    }
  }
  span {
    animation: fade-in-right 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) 1.4s both;
  }
  a {
    color: #fff;
  }
`;
