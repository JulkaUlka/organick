import styled from "styled-components";
import { titleColor, titleFont, whiteColor } from "../../App.styled";
import story from "../../img/story.png";

export const StoryContainer = styled.section`
  background-image: url(${story});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8vw;
  background-color: ${whiteColor};
  @media (max-width: 957px) {
    background-size: cover;
    justify-content: center;
  }
`;

export const TitleSmall = styled.p`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.56rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const TextBlock = styled.div`
  transform: translateX(10rem);
  width: 60%;
  padding: 5.56vw;
  border-radius: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: ${whiteColor};
  @media (max-width: 957px) {
    transform: translateX(0);
    width: 80%;
  }
  @media (max-width: 460px) {
    width: 90%;
  }
`;

export const ParagraphBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;
