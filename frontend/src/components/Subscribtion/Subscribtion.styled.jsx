import styled from "styled-components";
import form from "../../img/form.png";
import { Container, accentColor } from "../../App.styled";

export const SubContainer = styled(Container)`
  background: url(${form}) center/cover;
  background-color: ${accentColor};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6.56rem 4.44vw;
  @media (max-width: 634px) {
    flex-wrap: wrap;
    gap: 10px;
  }
  & form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    @media (max-width: 416px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  & div {
    width: 40%;
    @media (max-width: 634px) {
      width: 100%;
    }
  }
`;
