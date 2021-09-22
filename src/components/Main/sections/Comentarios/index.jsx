import React,{ useState,useEffect } from 'react';
import api from '../../../../services/api';
import Comentario from './Comentario';
import { ComentariosStyled } from './style';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([])
  const [comentarioText, setComentarioText] = useState('')

  useEffect(()=>{
    api.get('/comentarios').then(response => setComentarios(response.data))
  },[])

  async function addComent(coment) {
    const response = await api.post('/comentarios',{
      comentario: coment
    })

    const comentario = response.data
    setComentarios([...comentarios, comentario])
  }

  function onChange(ev){
    const { value } = ev.target;
    setComentarioText(value)
  }
  function adiciona(){
    addComent(comentarioText)
  }
  
  return (
  <ComentariosStyled>
    <div className="container">
      <form action="https://minha-api-pessoal.herokuapp.com/comentarios" method="post">
        <textarea onChange={onChange} name="comentario" className="comentario" placeholder="escreva seu comentario aqui"></textarea>
        <button onClick={adiciona} type="button">enviar</button>
      </form>

      {comentarios.map(valor => (
        <Comentario
        name="roberto silva"
        comentario={valor.comentario}
      />
      ))}
    </div>


  </ComentariosStyled>
)}

export default Comentarios;