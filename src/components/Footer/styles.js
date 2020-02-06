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
  }
  a {
    color: #fff;
  }
`;
