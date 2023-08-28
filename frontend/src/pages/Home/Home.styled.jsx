import styled from "styled-components";

import {
 titleFont,
  titleColor,
  accentColor,
  italicFont,
  } from "../../App.styled";

  const H3 = ( {textColor, alighning,children, ...props }) => (
    <h3 {...props}>{children}</h3>
  );
  const H2 = ({ alighning, textColor, size, width,children, ...props }) => (
    <h2 {...props}>{children}</h2>
  );

export const SubTitle = styled(H3)`
color: ${(props) => props.textColor || accentColor};
font-family: ${italicFont};
font-size: 2.25vw;
font-weight: 400;
text-align: ${(props) => props.alighning || "center"};
margin-bottom:8px;
@media (max-width: 768px) {
    font-size: 17px;
  }
`;
export const Title = styled(H2)`
width: ${(props) => props.width || "auto"};
color: ${(props) => props.textColor || titleColor};
text-align: ${(props) => props.alighning || "center"};
font-family: ${titleFont};
font-size: ${(props) => props.size || "3.125vw"};;
font-weight: 800;
margin-bottom:40px;
@media (max-width: 768px) {
    font-size: 24px;
  }
`;

;