import styled from "styled-components";
import {
  titleFont,
  titleColor,
  accentColor,
  italicFont,
  bgColor,
} from "../../App.styled";
import heroBgr from "../../img/heroBgr.png";
import heroBgr2 from "../../img/heroBgr2.png";

export const HeroContainer = styled.section`
  background: url(${heroBgr}) center/cover;
  background-color: ${bgColor};
  position: relative;
  padding: 15.44vw 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${heroBgr2}) center/cover;
  }
`;
export const Subtitle = styled.h2`
  color: ${accentColor};
  font-family: ${italicFont};
  font-size: 2.25vw;
  font-weight: 400;
  text-align: left;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
export const MainTitle = styled.h1`
  width: 50%;
  color: ${titleColor};
  text-align: left;
  font-family: ${titleFont};
  font-size: 4.375vw;
  font-weight: 800;
  margin-bottom: 23px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
