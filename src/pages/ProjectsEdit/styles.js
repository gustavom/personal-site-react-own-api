import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto 50px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input,
    textarea,
    select {
      background: #fff;
      border: 1px solid #222;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #222;
      margin: 0 0 10px;
      font-weight: 500;
      font-size: 12px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    textarea {
      height: 100px;
      padding: 15px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: 400;
      font-size: 13px;
    }

    /* hr {
      border: 0;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    } */

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: 600;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin: 25px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: 600;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
