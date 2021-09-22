import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body{
    height: 100%;
    font-family: sans-serif;
  }
  body{
    background-color: #181818;
    color: white;
  }
  ul{
    list-style-type: none;
  }
  .container{
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
`