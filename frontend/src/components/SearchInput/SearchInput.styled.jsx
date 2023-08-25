import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accentColor, titleColor, btnColor,whiteColor } from "../../App.styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  overflow: hidden;
  border-radius: 36px;
  padding: 8px;
  flex: 1 0 auto;
  max-width: 16.5vw;
  min-width: 130px;
 
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 1px;
  top: 0;
  padding: 15px;
  background-color: ${accentColor};
  border-radius: 50%;
  border: none;
  transition: background-color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${btnColor};
  }
  @media (max-width: 400px) {
    padding: 13px;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${whiteColor};
`;
export const Input = styled.input`
  padding: 6px 40px 6px 6px;
  background-color: inherit;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.86rem;
  color: ${titleColor};
  outline: none;
  border: none;

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: normal;
  }
`;
