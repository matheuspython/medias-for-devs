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
          image={"https://eufacoprogramas.com/wp-content/uploads/2011/04/frases-sobre-programacao.png"}
          title={"aprenda a programar do zero ao menos zero voce sai daqui sabendo menos do que quando entrou"}
          key={"aprenda a programar do zero ao menos zero voce sai daqui sabendo menos do que quando entrou"}
        />
        <Sugestoes />
        <Comentarios />
      </div>
    </MainStyled>
  )
}