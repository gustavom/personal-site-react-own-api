import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 100%;
      height: 200px;
      border-radius: 3px;
      border: solid 1px #222;
      background: #fff;
    }
    input {
      display: none;
    }
  }
  .icon-add {
    border-radius: 3px;
    border: solid 1px #222;
    padding: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  }
`;
