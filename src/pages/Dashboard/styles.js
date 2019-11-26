import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 35px 15px;
  .cards-list {
    padding: 50px 0;
    margin: 0 -20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      min-width: 25%;
      padding: 0 20px 10px;
      a {
        position: relative;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 15px;
        border: #eee solid 1px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        font-weight: 800;
        color: #222;
        font-size: 20px;
        overflow: hidden;
        transition: transform 0.2s;
        svg {
          align-self: center;
          margin-bottom: auto;
          position: absolute;
          top: 0;
          right: 0;
          transform: scale(3.3);
          transform-origin: top right;
          margin: -15px;
          opacity: 0.05;
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
