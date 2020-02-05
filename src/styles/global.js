import { createGlobalStyle } from 'styled-components';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css?family=Darker+Grotesque:400,500,600,700,800,900&display=swap'); */
/*   @import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
} */

  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600|Syncopate:400,700&display=swap');
  /*
  font-family: 'Syncopate', sans-serif;
font-family: 'Poppins', sans-serif;
   */
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font: 16px 'Poppins', sans-serif;
    /* font: 16px 'Darker Grotesque', sans-serif; */
    /* font: 16px 'Inter', sans-serif; */
    color:#222
  }
  a{
    color: #222;
    text-decoration: none;
  }
  ul{
    list-style: none
  }
  button{
    cursor: pointer;
  }
`;
