import React from "react";
import { HeaderStyled } from "./style";
import logo from '../../images/dev.png'


export const Header:React.FC = () =>{
  return(
    <HeaderStyled>
      <div className="container">
        <h1>media for devs</h1>
        <input placeholder="faça sua pesquisa aqui" type="text" />
        <img src={logo} alt="media for devs " />
      </div>
    </HeaderStyled>
  )
}