import styled from "styled-components";

import { ButtonArrowStyled } from "../Button/Button.styled";
import {
  Container,
  btnColor,
  titleColor,
  titleFont,
  whiteColor,
} from "../../App.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsContainer = styled.section`
  padding: 9.7vw 0;
  background: ${whiteColor};
`;
export const TitleBlock = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NewsBlock = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.88rem;
`;
export const Button = styled(ButtonArrowStyled)`
  background-color: transparent;
  border: 2px solid ${titleColor};
  color: ${titleColor};
`;
export const Icon = styled(FontAwesomeIcon)`
  color: ${btnColor};
`;
const Div = ({ backgroundImg, ...props }) => <div {...props}></div>;
export const Card = styled(Div)`
  width: 46%;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 8vw;
  align-items: flex-start;
  padding: 5rem;
  padding-bottom: 0;
  border-radius: 30px;
  margin-bottom: 10px;
  @media (max-width: 1057px) {
    width: 80%;
  }
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${whiteColor};
  color: ${titleColor};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  font-family: ${titleFont};
  font-weight: 800;
  font-size: 1.25rem;
  text-align: center;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 20px 35px rgba(167, 167, 167, 0.25);
  border-radius: 33px;
  padding: 5vw;
  transform: translateY(6rem);
  background-color: ${whiteColor};
  @media (max-width: 1057px) {
    transform: translateY(0);
  }
`;
export const User = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: start;
  gap: 0.8rem;
`;
export const UserName = styled.p`
  font-family: ${titleFont};
  color: ${titleColor};
  font-weight: 400;
  font-size: 1.125rem;
`;
