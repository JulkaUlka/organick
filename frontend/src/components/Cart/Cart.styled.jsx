import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { titleColor, btnColor, titleFont, whiteColor } from "../../App.styled";

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #fafafa;
  overflow: hidden;
  border-radius: 36px;
  border: 1px solid #e0e0e0;
  padding: 3px 10px 3px 3px;
  flex: 1 0 auto;
`;
export const CartIcon = styled(FontAwesomeIcon)`
  color: ${whiteColor};
`;
export const Quntity = styled.p`
  font-family: ${titleFont};
  font-size: 1.25vw;
  font-weight: 700;
  color: ${titleColor};
  @media (max-width: 1020px) {
    font-size: 16px;
  @media (max-width: 400px) {
    font-size: 12px;
  }
 
`;
export const Wrapper = styled.div`
  padding: 13px;
  background-color: ${titleColor};
  border-radius: 50%;
  border: none;
  transition: background-color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${btnColor};
  }
  @media (max-width: 400px) {
    padding: 11px;
  }
`;
