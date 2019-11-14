import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    h1 {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
    span {
      display: flex;
      justify-content: flex-end;
      a {
        display: block;
        padding: 0 3px;
        cursor: pointer;
        & + a {
          position: relative;
          margin-left: 10px;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            margin-left: -5px;
            content: '';
            display: block;
            height: 100%;
            width: 1px;
            background: #999;
          }
        }
      }
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
