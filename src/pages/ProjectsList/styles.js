import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 35px 15px;
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
        min-width: 20px;
        max-width: 20px;

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
`;
