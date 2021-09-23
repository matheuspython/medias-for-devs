import React from "react";

import Comentarios from "./sections/Comentarios";
import { Sugestoes } from "./sections/Sugestoes";
import Videos from "./sections/Videos";
import { MainStyled } from "./style";

export const Main:React.FC = ()=>{
  return(
    <MainStyled>
      <div className="container">
        <Videos
          title={"iniciando na programação web 1"}
          key={"iniciando na programação web 1"}
        />
        <Sugestoes />
        <Comentarios />
      </div>
    </MainStyled>
  )
}