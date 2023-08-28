import { ButtonArrowStyled } from "../Button/Button.styled";
import { Arrow } from "../Arrow/Arrow";
import { BlockStyled, QuantityLabel, QuantityInput } from "./Quantity.styled";

export const Quantity = ({
  onAction,
  text,
  showArrow,
  inputValue,
  handleQuantityChange,
}) => {
  return (
    <BlockStyled>
      <QuantityLabel>Quantity:</QuantityLabel>
      <QuantityInput
        type="number"
        min={1}
        max={100}
        step={1}
        value={inputValue}
        onChange={handleQuantityChange}
      ></QuantityInput>
      <ButtonArrowStyled onClick={onAction} rel="noopener
        noreferrer">
        {text} {showArrow ? <Arrow /> : null}
      </ButtonArrowStyled>
    </BlockStyled>
  );
};
