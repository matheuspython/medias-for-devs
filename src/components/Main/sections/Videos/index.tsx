import React,{ useState, useEffect } from 'react';
import api from '../../../../services/api';

import { VideoStyled } from './style';

interface PropsVideos {
  image: string;
  title: string;
}

const Videos: React.FC<PropsVideos> = ({ title, image }) => {
  const [likes, setLikes] = useState(0)
  const [limitLike, setLimitLike] = useState(true)
  const [visualizacoes, setvisualizacoes] = useState(0)

  useEffect( ()=>{
      api.post('/visualizacoes').then(
        response => setvisualizacoes(response.data.visualizacao)
      )
  }, [])
  
  useEffect(()=>{
    api.get('/likes').then(response => setLikes(response.data.like))
  },[])

  async function addLike(){
    if(!limitLike) return
    setLimitLike(false)
    const response = await api.post('/likes')
    const newLike = response.data.like
    setLikes(newLike)
  }

 




  return (
    <VideoStyled>
      <div className="video">
        <img src={image} alt={title} />
      </div>

      <p>{title}</p>
      
      <div className="viws-and-likes">
        <span className="viws">{visualizacoes} visualizações</span>
        
        <div className="likes">
          <span onClick={addLike} className="like">likes {likes}</span>
        </div>

      </div>
    </VideoStyled>
  );
}

export default Videos;