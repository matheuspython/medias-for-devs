import React from 'react';
import { ComentarioStyled } from './style';

interface PropsComentario {
  name: string;
  comentario: string;
}

const Comentario: React.FC<PropsComentario> = ({ name, comentario }) => {
  return(
    <ComentarioStyled>
      <span>{name}</span>
      <p>{comentario}</p>
    </ComentarioStyled>
  )
}

export default Comentario;