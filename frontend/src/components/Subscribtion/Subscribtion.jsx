import React from "react";
import { SubContainer } from "./Subscribtion.styled";
import { ButtonStyled } from "../Button/Button.styled";
import { Title } from "../ProductInfo/Productinfo.styled";
import { Input } from "../OrderedForm/OrderedForm.styled";
export function Subscribtion() {
  return (
    <section>
      <SubContainer>
        <div>
          <Title alighning="left">Subscribe to our Newsletter</Title>
        </div>
        <form>
          <Input type="email" placeholder="Your Email Address" />
          <ButtonStyled type="submit">Subscribe</ButtonStyled>
        </form>
      </SubContainer>
    </section>
  );
}
