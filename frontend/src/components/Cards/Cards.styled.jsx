import styled from "styled-components";
import { titleColor, whiteColor, bgColorSecondary } from "../../App.styled";

export const CardsContainer = styled.div`
  padding: 9.7vw 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2.37vw;
  background: ${bgColorSecondary};
  @media (max-width: 500px) {
    flex-direction: column;
  }

  & div {
    background-color: ${whiteColor};
    border-radius: 1.25rem;
    padding: 2.0625vw 5.1875vw;
    color: ${titleColor};
    text-align: center;
  }
`;
