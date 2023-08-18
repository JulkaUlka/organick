import { ArrowStyled, Wrapper } from "./Arrow.styled";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Arrow() {
  return (
    <Wrapper>
      <ArrowStyled icon={faArrowRight} />
    </Wrapper>
  );
}
