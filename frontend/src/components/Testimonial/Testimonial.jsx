import React from "react";
import {
  TestimonialContainer,
  MetricsList,
  MetricsItem,
} from "./Testimonial.styled";
import { SubTitle, Title } from "../../pages/Home/Home.styled";
import { Container } from "../../App.styled";
import { Slider } from "./Slider/Slider";
export const Testimonial = () => {
  return (
    <TestimonialContainer>
      <Container>
        <SubTitle>Testimonial</SubTitle>
        <Title>What Our Customer Saying?</Title>
        <Slider />
        <MetricsList>
          <MetricsItem>
            <div>
              <p>100%</p>
              <p>Organic</p>
            </div>
          </MetricsItem>
          <MetricsItem>
            <div>
              <p>285</p>
              <p>Active Product</p>
            </div>
          </MetricsItem>
          <MetricsItem>
            <div>
              <p>350+</p>
              <p>Organic Orchads</p>
            </div>
          </MetricsItem>
          <MetricsItem>
            <div>
              <p>25+</p>
              <p>Years of Farming</p>
            </div>
          </MetricsItem>
        </MetricsList>
      </Container>
    </TestimonialContainer>
  );
};
