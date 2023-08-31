import styled, { keyframes } from "styled-components";
import { Category } from "../ProductList/ProductList.styled";
import { titleFont, titleColor, bgColor, mainColor } from "../../App.styled";
import { ButtonStyled } from "../Button/Button.styled";

const Slide = keyframes`
0% {
  -webkit-transform: translateY(-1000px);
          transform: translateY(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  opacity: 1;
}
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(244, 244, 244, 0.7);
  z-index: 3;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  max-height: 100vh;
  padding: 7rem 0rem 7rem;
  background-color: #fffafa;
  opacity: 1;
  z-index: 4;
  overflow: scroll;
  animation: ${Slide} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 873px) {
    padding: 2rem 0rem 2rem;
  }
`;
const Div = ({ distance,wrapping, ...props }) => <div {...props}></div>;
export const Block = styled(Div)`
  display: flex;
  flex-wrap: ${(props) => props.wrapping || "wrap"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.distance || "5px"};
  margin-bottom: 1.69vw;
`;
export const CategoryModal = styled(Category)`
  width: 96px;
  position: absolute;
  top: 38px;
  left: 5px;
`;
export const ImageWrap = styled.div`
  max-height: 50vh;
  background: ${bgColor};
  border-radius: 1.875rem;
  position: relative;
  overflow: hidden;
`;
export const Image = styled.img`
  margin-top: 40px;
  mix-blend-mode: multiply;
 `;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  width: 50%;
  @media (max-width: 873px) {
    width: 100%;
    align-items: center;
  }
`;
export const Title = styled.p`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 2.5vw;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const P = ({ aligning, width, ...props }) => <p {...props}></p>;

export const Text = styled(P)`
  color: ${mainColor};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.86rem;
  margin: 0 auto;
  width: ${(props) => props.width || "100%"};
  text-align: ${(props) => props.aligning};
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1rem;
    width: 100%;
  }
`;
export const ModalButton = styled(ButtonStyled)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 35px;
  padding: 0.44vw 1.44vw;
`;
