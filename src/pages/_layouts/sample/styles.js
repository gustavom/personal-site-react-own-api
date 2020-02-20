import styled from 'styled-components';

// import { darken } from 'polished';

export const Wrapper = styled.div`
  min-height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: #fff;
  background: rgb(240, 240, 240);
  background: radial-gradient(
    circle,
    rgba(240, 240, 240, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  width: 100%;
  header,
  footer {
    position: relative;
  }
  header *,
  footer * {
    animation: none !important;
  }
`;
export const Content = styled.div`
  width: 100%;
  flex: 1 1 100%;
  display: flex;
`;
