import { title } from "process";
import React from "react";
import { Sugestoes } from "./sections/Sugestoes";
import Videos from "./sections/Videos";
import { MainStyled } from "./style";

export const Main:React.FC = ()=>{
  return(
    <MainStyled>
      <div className="container">
        <Videos
          image={"https://eufacoprogramas.com/wp-content/uploads/2011/04/frases-sobre-programacao.png"}
          viws={99999}
          title={"aprenda a programar do zero ao menos zero voce sai daqui sabendo menos do que quando entrou"}
          key={title}
        />
        <Sugestoes />
      </div>
    </MainStyled>
  )
}