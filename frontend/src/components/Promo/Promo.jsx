import React from "react";
import { PromoContainer, Card } from "./Promo.styled";
import { SubTitle, Title } from "../../pages/Home/Home.styled";
import { whiteColor } from "../../App.styled";

export const Promo = () => {
  return (
    <section>
      <PromoContainer>
        <Card>
          <SubTitle textColor={whiteColor} alighning="left">
            Natural
          </SubTitle>
          <Title
            textColor={whiteColor}
            alighning="left"
            size="2.5vw"
            width="50%"
          >
            Get Garden Fresh Fruits
          </Title>
        </Card>
        <Card>
          <SubTitle alighning="left">Offer!!</SubTitle>
          <Title alighning="left" size="2.5vw" width="50%">
            Get 10% off on Vegetables
          </Title>
        </Card>
      </PromoContainer>
    </section>
  );
};
