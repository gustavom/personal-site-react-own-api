import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 35px 15px;
  h1 {
    display: flex;
    justify-content: space-between;
    a {
      background-color: #222;
      font-size: 18px;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 10px;
    }
  }
  table {
    width: 100%;
    padding: 0;
    margin: 50px 0;
    border-spacing: 0;
    tr {
      border-collapse: collapse;
    }
    th,
    td {
      border: solid 1px #999;
      border-collapse: collapse;
      padding: 8px 16px;
      text-transform: uppercase;
      font-weight: 600;
      &.edit {
        min-width: 60px;
        max-width: 80px;

        font-size: 13px;
        a {
          display: flex;
          align-items: center;
          svg {
            margin-right: 10px;
          }
        }
      }
      a {
        color: #333;
      }
    }
    th {
      text-align: left;
      color: #fff;
      background-color: #222;
      border-color: #222;
      &.edit {
        text-align: center;
      }
    }
  }
  form {
    display: flex;
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
      margin: 0 5px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
  }
`;
