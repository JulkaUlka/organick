import React from "react";
import {
  AboutContainer,
  TextBlock,
  Image,
  Wrapper,
  TitleSmall,
  ParagraphBlock,
} from "./AboutUs.styled";
import { SubTitle, Title } from "../../pages/Home/Home.styled";
import aboutBg from "../../img/aboutBg.png";
import { ButtonArrowStyled } from "../Button/Button.styled";
import { Arrow } from "../Arrow/Arrow";
import { Text } from "../ProductInfo/Productinfo.styled";
export const AboutUs = () => {
  return (
    <AboutContainer>
      <Image src={aboutBg} alt="oranges" />
      <TextBlock>
        <SubTitle alighning="left">About Us</SubTitle>
        <Title alighning="left">
          We Believe in Working
          <br /> Accredited Farmers
        </Title>
        <Text aligning="left">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </Text>
        <ParagraphBlock>
          <Wrapper>
            <TitleSmall>Organic Foods Only</TitleSmall>
            <Text aligning="left">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </Text>
          </Wrapper>
          <Wrapper>
            <TitleSmall>Quality Standards</TitleSmall>
            <Text aligning="left">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </Text>
          </Wrapper>
        </ParagraphBlock>
        <ButtonArrowStyled
          rel="noopener
        noreferrer"
        >
          Shop Now <Arrow />
        </ButtonArrowStyled>
      </TextBlock>
    </AboutContainer>
  );
};
