import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whiteColor } from "../../App.styled";

export const ArrowStyled = styled(FontAwesomeIcon)`
  color: ${whiteColor};
  width: 8px;
  height: auto;
`;
export const Wrapper = styled.div`
  display: flex;
  background-color: #335b6b;
  border-radius: 50%;
  padding: 3px;
  align-items: center;
  justify-content: center;
`;
