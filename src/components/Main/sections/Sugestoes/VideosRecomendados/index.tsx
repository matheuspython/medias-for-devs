import React from 'react';
import { VideosRecomendadosStyled } from './style';

interface PropsVideosRecomendados {
  img: string;
  title: string;
  chanel: string
}

const VideosRecomendados: React.FC<PropsVideosRecomendados> = ({ chanel, img, title }) => {
  return (
  <VideosRecomendadosStyled>
    <img src={img} alt={title} />
    <div className="title-and-chanel">
      <h3>{title}</h3>
      <p>{chanel}</p>
    </div>
  </VideosRecomendadosStyled>
  )
}

export default VideosRecomendados;