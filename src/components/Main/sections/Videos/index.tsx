import React,{ useState, useEffect } from 'react';
import api from '../../../../services/api';

import { VideoStyled } from './style';

interface PropsVideos {
  title: string;
}

const Videos: React.FC<PropsVideos> = ({ title }) => {
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
        <iframe src="https://www.youtube.com/embed/4v-Qe1dqHHw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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