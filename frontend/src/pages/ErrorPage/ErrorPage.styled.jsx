import styled from "styled-components";
import { MainTitle } from "../../components/Hero/Hero.styled";
import error from "../../img/error.png";
import { bgColorSecondary } from "../../App.styled";

export const TitleStyled = styled(MainTitle)`
  width: 100%;
`;
export const ErrorContainer = styled.div`
  background: url(${error}) center/cover;
  background-color: ${bgColorSecondary};
  position: relative;
  padding: 8vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const ErrorBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25vw;
  width: 40%;
  @media (max-width: 873px) {
    width: 60%;
  }
  & h2 {
    color: #8fa8a8;
    font-size: 8vw;
    font-weight: 700;
    @media (max-width: 550px) {
      font-size: 44px;
    }
  }
`;
