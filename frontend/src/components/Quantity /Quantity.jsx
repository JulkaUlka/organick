import { ButtonArrowStyled } from "../Button/Button.styled";
import { Arrow } from "../Arrow/Arrow";
import { BlockStyled, QuantityLabel, QuantityInput } from "./Quantity.styled";

export const Quantity = ({ onAction, text, showArrow }) => {
  return (
    <BlockStyled>
      <QuantityLabel>Quantity:</QuantityLabel>
      <QuantityInput type="number" min={0} max={100} step={1}></QuantityInput>
      <ButtonArrowStyled onClick={onAction}>
        {text} {showArrow ? <Arrow /> : null}
      </ButtonArrowStyled>
    </BlockStyled>
  );
};
