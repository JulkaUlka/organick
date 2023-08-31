import React from "react";
import {
  NewsContainer,
  NewsBlock,
  TitleBlock,
  CardBody,
  User,
  UserName,
  Card,
  Data,
  Icon,
  Button,
} from "./News.styled";
import { SubTitle, Title } from "../../pages/Home/Home.styled";
import { YellowButtonStyled } from "../Button/Button.styled";
import { Arrow } from "../Arrow/Arrow";
import { Text } from "../ProductInfo/Productinfo.styled";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { TitleSmall } from "../Story/Story.styled";
import news1 from "../../img/news1.png";
import news2 from "../../img/news2.png";

export function News() {
  return (
    <NewsContainer>
      <TitleBlock>
        <div>
          <SubTitle alighning="left">News</SubTitle>
          <Title alighning="left">
            Discover weekly content about
            <br />
            organic food, & more
          </Title>
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          More News
          <Arrow />
        </Button>
      </TitleBlock>
      <NewsBlock>
        <Card backgroundImg={news1}>
          <Data>
            25
            <br /> Nov
          </Data>
          <CardBody>
            <User>
              <Icon icon={faUser} />
              <UserName>By Rachi Card</UserName>
            </User>
            <TitleSmall>The Benefits of Vitamin D & How to Get It</TitleSmall>
            <Text aligning="left">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </Text>
            <YellowButtonStyled
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Read More <Arrow />
            </YellowButtonStyled>
          </CardBody>
        </Card>
        <Card backgroundImg={news2}>
          <Data>
            25
            <br /> Nov
          </Data>
          <CardBody>
            <User>
              <Icon icon={faUser} />
              <UserName>By Rachi Card</UserName>
            </User>
            <TitleSmall>Our Favourite Summertime Tommeto</TitleSmall>
            <Text aligning="left">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </Text>
            <YellowButtonStyled
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Read More <Arrow />
            </YellowButtonStyled>
          </CardBody>
        </Card>
      </NewsBlock>
    </NewsContainer>
  );
}
