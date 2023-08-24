import styled from "styled-components";
import { titleFont, titleColor, accentColor } from "../../App.styled";


export const Form = styled.form`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:46px;
 padding:100px 0;
`;
export const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
gap:46px;
flex-wrap: wrap;
`;
export const Input = styled.input`
  font-style: italic;
  color: ${titleColor};
  font-family: ${titleFont};
  font-weight: 400;
  font-size: 1.5rem;
  background: #fff;
  border: 1px solid ${accentColor};
  border-radius: 16px;
  padding: 1.4vw;
  transition: outline-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    color: #ababab;
    font-size: 1.125rem;
  }

  &:hover,
  &:focus {
    outline-color: ${titleColor};
  }
`;
export const Label = styled.label`
  display: flex;
  flex: 1 1 calc(50% - 23px);
  flex-direction: column;
  gap: 20px;
  color: ${titleColor};
  font-family: ${titleFont};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: normal;
`;
export const Textarea = styled.textarea`
flex: 1 1 100%;
width: 100%;
  height: 15rem;
  padding: 1.4vw;
  border: 1px solid ${accentColor};
  border-radius: 16px;
  font-style: italic;
  color: ${titleColor};
  font-family: ${titleFont};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: normal;
  background: #fff;
  &::placeholder {
    color: #ababab;
    font-size: 1.125rem;
  }
`;
export const Error = styled.div`
  color: ${accentColor};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: normal;
`;

