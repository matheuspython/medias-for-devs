import styled from 'styled-components';
import media from 'styled-media-query';

export const ComentariosStyled = styled.section`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form{
    width: 60%;
    display: flex;
    flex-direction: column;
    ${media.lessThan("large")`
      width: 100%;
    `}
    textarea{
      outline: 0;
      background: transparent;
      width: 100%;
      border: 0;
      border-bottom: 1px solid black;
      resize: none;
      color: white;
    }
    button{
      margin-top: 8px;
      margin-left: auto;
      width: 100px;
      background: #2c2c2c;
      color: white;
      border: 0;
      height: 35px;
      cursor: pointer;

    }
  }
`;
