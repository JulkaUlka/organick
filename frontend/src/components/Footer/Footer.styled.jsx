import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  titleColor,
  titleFont,
  Container,
  mainFont,
  mainColor,
  accentColor,
} from "../../App.styled";

export const FooterContainer = styled(Container)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: 5.56vw;
  padding-top: 4.31vw;

  @media (max-width: 660px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 20px;
  }
  & h3 {
    margin-bottom: 2vw;
    font-family: ${titleFont};
    font-size: 1.875vw;
    font-weight: 700;
    color: ${titleColor};
    @media (max-width: 660px) {
        font-size: 18px;
      }
  }
`;
export const ContactBlock = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3.19vw;
  border-right: 1px solid #d4d4d4;

  @media (max-width: 660px){
    border:none;
    align-items: center;
  }

  & ul {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;
    gap: 2vw;
    @media (max-width: 660px){
        align-items: flex-start;
      }
}
 & li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 660px) {
      align-items: flex-start;
      gap: 10px;
    }
  }
& p {
    font-family: ${mainFont};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.85rem;
    color: ${mainColor};

    @media (max-width: 1120px) {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.375rem;
    }
  }
& a {
    font-family: ${mainFont}; 
    color: ${mainColor};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color:${accentColor};
    }
  }
  
}
`;

export const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1.65vw;

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
  }
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: #eff6f1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${accentColor};
  }
  @media (max-width: 660px) {
    width: 30px;
  height: 30px;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  color: ${titleColor};
  width: 1.25rem;
  height: 1.25rem;
  @media (max-width: 660px) {
    width: 15px;
  height: 15px;
  }
`;
export const PagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3.19vw;
  border-left: 1px solid #d4d4d4;

  @media (max-width: 768px) {
    display: none;
  }
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2vw;
    font-family: ${mainFont};
    font-size: 1.125rem;
    font-weight: 400;
    color: ${mainColor};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      color: ${accentColor};
    }
    @media (max-width: 1120px) {
      align-items: flex-start;
      gap: 20px;
    }
  }
`;
export const Copyright = styled.div`
  border-top: 1px solid #d4d4d4;
  padding: 1vw 0;
  text-align: center;
`;
