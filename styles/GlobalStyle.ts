import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    border: none;
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';

    &:focus {
    outline: none;
  }
  }

  body {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
    background-color: #fdfdfd;
  }

  ul,
  ol {
    list-style: none;
  }
  
  a,
  a:visited {
    text-decoration: none;
  }


  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
