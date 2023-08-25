import styled from "styled-components";
import { titleFont, titleColor, btnColor, whiteColor } from "../../App.styled";

const Button = ({ backgroundColor, textColor, margins, ...props }) => (
  <button {...props}></button>
);

export const ButtonStyled = styled(Button)`
  display: block;
  padding: 1.44vw 2.44vw;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  border: 2px solid transparent;
  background-color: ${(props) => props.backgroundColor || titleColor};
  color: ${(props) => props.textColor || whiteColor};
  margin: ${(props) => props.margins || "none"};
  font-family: ${titleFont};
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 1rem;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #eff6f1;
    color: ${titleColor};
  }
`;
export const ButtonArrowStyled = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 1.44vw;
  &:hover,
  &:focus {
    background-color: ${btnColor};
    color: ${titleColor};
  }
`;
export const YellowButtonStyled = styled(ButtonArrowStyled)`
position: relative;
background-color: ${btnColor};
color: ${titleColor};
z-index:1;
  &:hover,
  &:focus {
    background-color: ${titleColor};
    color: ${whiteColor};
  }
`;
