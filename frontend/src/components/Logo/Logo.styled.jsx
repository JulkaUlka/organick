import styled from "styled-components";
import {
    titleFont,
    titleColor,
    } from "../../App.styled";

export const LogoImg = styled.img`
  @media (max-width: 480px) {
    width: 26px;
    height: 38px;
  }
`;
export const LogoLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: ${titleFont};
  font-size: 2.375vw;
  font-weight: 700;
  line-height: 44px;
  color: ${titleColor};
  flex: 1 0 auto;

  @media (max-width: 1020px) {
    font-size: 22px;
    margin: 0 auto;
    display: ${({ open }) => (open ? "none" : "flex")};
  }
  @media (max-width: 480px) {
    padding-left: 20px;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }
`;
