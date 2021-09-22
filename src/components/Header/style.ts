import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 65px;
  background-color: hsl(0, 0%, 18.82%);
  .container{
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:space-between;
    h1{
      font-size: 20px;
    }
    input{
      margin: 0 auto;
      width: 100%;
      height: 35px;
      border-radius: 15px;
      outline: 0;
      padding-left: 15px;
      border: 0;
      max-width: 500px;
      background-color: #181717;
      color: white;
    }
    img{
      width: 60px;
      border-radius: 50%;
    }
  }

`