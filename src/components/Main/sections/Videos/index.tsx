import React from 'react';
import { VideoStyled } from './style';

interface PropsVideos {
  image: string;
  title: string;
  viws: number;
}

const Videos: React.FC<PropsVideos> = ({ title, viws, image }) => {
  return (
    <VideoStyled>
      <div className="video">
        <img src={image} alt={title} />
      </div>

      <p>{title}</p>
      
      <div className="viws-and-likes">
        <span className="viws">{viws} visualizações</span>
        
        <div className="likes">
          <span className="like">likes {3}</span>
          <span className="deslike">deslikes {0}</span>
        </div>

      </div>
    </VideoStyled>
  );
}

export default Videos;