import React from "react";
import { YellowButtonStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";
import { Subtitle, MainTitle, HeroContainer } from "./Hero.styled";
import { Container } from "../../App.styled";

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <Subtitle>100% Natural Food</Subtitle>
        <MainTitle>Choose the best healthier way of life</MainTitle>
        <YellowButtonStyled backgroundColor="btnColor">
          Explore Now <Arrow />
        </YellowButtonStyled>
      </Container>
    </HeroContainer>
  );
};
