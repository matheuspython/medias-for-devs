import styled from 'styled-components';
import media from 'styled-media-query';

export const VideoStyled = styled.section`
  width: 58%;
  padding-top: 20px;
  ${media.lessThan("large")`
    width: 100%;
  `}

  .video{
    width:100%;
    height: 89vh;
    max-height: 400px;
    img{
      background-position: center;
      object-fit: cover;
      background-size: cover;
      width: 100%;
      height: 100%;
    }
  }
  p{
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px 0;
  }
  .viws-and-likes{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .likes{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 150px;
      .like{
        width: 48%;
        cursor: pointer;
      }

    
    }
  }
`;
