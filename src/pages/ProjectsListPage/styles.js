import styled from 'styled-components';

export const ContainerProjetos = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100%; */
  padding: 40px 15px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h2 {
    font-family: 'Syncopate', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: solid 3px #222;
    width: 100%;
    font-size: 45px;
    padding-bottom: 15px;
    margin-bottom: 45px;
  }
`;
export const ProjectList = styled.ul`
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
  padding: 10px 3px 6px;
  margin-bottom: 10px;
  h3{
    font-weight: 500;
    font-size: 14px;
  }
    &:hover {
      text-decoration: underline;
    }
  }
`;
