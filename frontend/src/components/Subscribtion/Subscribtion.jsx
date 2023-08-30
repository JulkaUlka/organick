import React from "react";
import { SubContainer } from "./Subscribtion.styled";
import { ButtonStyled } from "../Button/Button.styled";
import { Title } from "../../pages/Home/Home.styled";
import { Input } from "../OrderedForm/OrderedForm.styled";
import { whiteColor } from "../../App.styled";
export function Subscribtion() {
  return (
    <section>
      <SubContainer>
        <div>
          <Title alighning="left" textColor={whiteColor}>Subscribe to our Newsletter</Title>
        </div>
        <form>
          <Input type="email" placeholder="Your Email Address" />
          <ButtonStyled type="button">Subscribe</ButtonStyled>
        </form>
      </SubContainer>
    </section>
  );
}
