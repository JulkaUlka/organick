import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, backgroundColor, textColor, onClick }) => {
  return (
    <ButtonStyled
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </ButtonStyled>
  );
};
