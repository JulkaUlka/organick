import React from "react";
import {
  StoryContainer,
  TextBlock,
  TitleSmall,
  ParagraphBlock,
} from "./Story.styled";
import { SubTitle, Title } from "../../pages/Home/Home.styled";

import { Text } from "../ProductInfo/Productinfo.styled";

export const Story = () => {
  return (
    <StoryContainer>
      <TextBlock>
        <SubTitle alighning="left">Eco Friendly</SubTitle>
        <Title alighning="left">
          Econis is a Friendly <br />
          Organic Store
        </Title>
        <ParagraphBlock>
          <div>
            <TitleSmall>Start with Our Company First</TitleSmall>
            <Text aligning="left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Text>
          </div>
          <div>
            <TitleSmall>Learn How to Grow Yourself</TitleSmall>
            <Text aligning="left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Text>
          </div>
          <div>
            <TitleSmall>Farming Strategies of Today</TitleSmall>
            <Text aligning="left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </Text>
          </div>
        </ParagraphBlock>
      </TextBlock>
    </StoryContainer>
  );
};
