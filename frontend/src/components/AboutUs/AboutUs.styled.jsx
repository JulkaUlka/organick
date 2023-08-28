import styled from "styled-components";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";

import {
  Container,
  bgColor,
  titleColor,
  titleFont,
  whiteColor,
} from "../../App.styled";

export const AboutContainer = styled(Container)`
  padding: 9.7vw 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${bgColor};
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 50%;
`;
export const TitleSmall = styled.p`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.56rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const TextBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 3.43rem;
  @media (max-width: 975px) {
    width: 100%;
    padding-left: 0;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  margin-left: 7rem;
  &:first-child {
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }
  &:first-child::before,
  &:last-child::before {
    content: "";
    position: absolute;
    top: 0;
    right: 102%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${whiteColor};
    padding: 36px 40px;
    border-radius: 1.25rem;
  }

  &:first-child::before {
    background-image: url(${icon1});
  }

  &:last-child::before {
    background-image: url(${icon2});
  }
  @media (max-width: 975px) {
    margin-left: 6rem;
  }
`;
export const ParagraphBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
