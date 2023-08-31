import styled from "styled-components";
import promo1 from "../../img/promo1.png";
import promo2 from "../../img/promo2.png";

import { Container,btnColor } from "../../App.styled";

export const PromoContainer = styled(Container)`
  padding: 9.7vw 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media (max-width: 654px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  width: 42.64vw;
  height: 22.94vw;
  border-radius: 1.875rem;
  background: #edf2f6;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 3.43rem;
 
  &:first-child {
    background: url(${promo1}) center/cover;
    background-color: ${btnColor};
  }
  &:last-child {
    background: url(${promo2}) center/cover;
    background-color: ${btnColor};
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 172px;
  }
`;
