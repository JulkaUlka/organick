import styled from "styled-components";
import { titleColor, titleFont } from "../../../App.styled";
import { Splide } from "@splidejs/react-splide";

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.5625rem;
  font-weight: 600;

  & img {
    border-radius: 50%;
  }
`;
export const SplideStyled = styled(Splide)`
  margin: 0 auto;
  padding-bottom: 30px;
`;
