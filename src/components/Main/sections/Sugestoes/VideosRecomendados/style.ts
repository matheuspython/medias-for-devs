import styled from 'styled-components';
import media from 'styled-media-query';

export const VideosRecomendadosStyled = styled.div`
   margin: 5px 0;
   display: flex;
    justify-content: space-between;
    width: 100%;
    transition: all.4s;
    cursor: pointer;
    &:hover{
      background-color: #2c2c2c;
    }
    img{
      width: 48%;
      ${media.lessThan("large")`
    width: 30%;
  `}
    }
    .title-and-chanel{
      width: 48%;
      display: flex;
      flex-direction: column;
      ${media.lessThan("large")`
    width: 78%;
    margin-left:8px ;
  `}
      h3{
        font-size: 16px;
      }
      p{
        color: #b6b6b6;
      }
    }
`;
