import React from 'react';
import Comentario from './Comentario';
import { ComentariosStyled } from './style';

const Comentarios: React.FC = () => {
  return (
  <ComentariosStyled>
    <div className="container">
      <form action="" method="post">
        <textarea name="comentario" className="comentario" placeholder="escreva seu comentario aqui"></textarea>
        <button type="button">enviar</button>
      </form>

      <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
            <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
            <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
            <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
            <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
            <Comentario
        name="roberto silva"
        comentario="conteudo excelente como sempre! estou adorando esses conteudos sobre next.js, traz mais pls !"
      />
    </div>


  </ComentariosStyled>
)}

export default Comentarios;