import styled from "styled-components";

import { titleFont, titleColor, accentColor } from "../../App.styled";

export const QuantityLabel = styled.p`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.25rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const QuantityInput = styled.input`
  display: inline-block;
  padding: 1.4vw 2vw;
  background: #fff;
  border: 2px solid ${titleColor};
  border-radius: 16px;
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.25rem;
  font-weight: 700;
  transition: outline-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    outline-color: ${accentColor};
  }
`;
export const BlockStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 0;
 `;
