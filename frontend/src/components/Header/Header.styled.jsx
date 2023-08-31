import styled from "styled-components";
import {
  titleFont,
  titleColor,
  accentColor,
  whiteColor,
} from "../../App.styled";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: center;
  padding-top: 4.3125vw;
  padding-bottom: 4.3125vw;
  gap: 10px;
  `;

export const BurgerMenu = styled.div`
  @media (max-width: 1020px) {
    width: 30px;
    height: 30px;
    top: 60px;
    left: 18px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    transform-origin: 1px;
    z-index: 2;

    span {
      width: 30px;
      height: 3px;
      border-radius: 10px;
      background-color: ${titleColor};
      transition: all 0.3s linear;
      position: ${({ open }) => (open ? "fixed" : "")};

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }

      &:nth-child(3) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(2) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const NavigateList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  flex: 1 2 auto;

  @media (max-width: 1020px) {
    display: none;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${whiteColor};
    position: fixed;
    top: 100px;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 60px;
    gap: 3vw;
    z-index: 2;
    overflow: hidden;
  }
  @media (max-width: 641px) {
    top: 79px;
  }
  @media (max-width: 380px) {
    top: 75px;
  }
 `;

export const NavItem = styled.li`
  font-family: ${titleFont};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${titleColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${accentColor};
  }
`;
