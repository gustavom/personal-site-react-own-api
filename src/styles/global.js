import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, border-style,#root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 16px 'Poppins', sans-serif;
    color:#222
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none
  }
  button{
    cursor: pointer;
  }
`;
