import styled from "styled-components";
import media from "styled-media-query";

export const SugestoesStyled = styled.section`
  width: 38%;
  padding-top: 20px;
  ${media.lessThan("large")`
    width: 100%;
  `}

`