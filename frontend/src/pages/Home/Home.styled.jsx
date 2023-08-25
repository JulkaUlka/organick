import styled from "styled-components";

import {
 titleFont,
  titleColor,
  accentColor,
  italicFont
  } from "../../App.styled";


export const SubTitle = styled.h3`
color: ${accentColor};
font-family: ${italicFont};
font-size: 2.25vw;
font-weight: 400;
text-align: center;
margin-bottom:8px;
@media (max-width: 768px) {
    font-size: 17px;
  }
`;
export const Title = styled.h2`
color: ${titleColor};
text-align: center;
font-family: ${titleFont};
font-size: 3.125vw;
font-weight: 800;
margin-bottom:40px;
@media (max-width: 768px) {
    font-size: 24px;
  }
`;