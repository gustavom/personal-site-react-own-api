import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 50%;
`;
export const ProjectItem = styled.li`
  flex: 0 0 100%;
  max-width: 100%;
  text-transform: uppercase;
  /* padding-bottom: 25px; */
  border-bottom: solid 1px #999;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 3px 6px;
    &:after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background-color: #222;
      border-radius: 50%;
      margin-left: 20px;
      margin-right: 10px;
      opacity: 0;
    }
    h3 {
      font-weight: 500;
      font-size: 14px;
    }
    &:hover {
      text-decoration: underline;
      &:after {
        opacity: 1;
      }
    }
  }
`;
