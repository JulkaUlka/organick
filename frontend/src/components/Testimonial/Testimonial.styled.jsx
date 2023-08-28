import styled from "styled-components";
import testimonialRight from "../../img/testimonialRight.png";
import testimonialLeft from "../../img/testimonialLeft.png";
import {
  accentColor,
  bgColor,
  titleColor,
  titleFont,
  whiteColor,
} from "../../App.styled";

export const TestimonialContainer = styled.section`
  padding: 9.7vw 0;
  background: url(${testimonialRight}) right no-repeat,
    url(${testimonialLeft}) left no-repeat;
  background-color: ${bgColor};
`;

export const MetricsList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 12.74vw;
  &::before {
    content: "";
    position: absolute;
    top: -6.37vw;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
  }
`;

export const MetricsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 4px solid ${accentColor};
  background-color: ${whiteColor};
  width: 13.1875vw;
  height: 13.1875vw;
  @media (max-width: 767px) {
    width: 102px;
    height: 102px;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${bgColor};
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    color: ${titleColor};
    font-size: 1.125vw;
    font-weight: 600;
    line-height: 1.86vw;
    @media (max-width: 767px) {
      font-size: 11px;
      width: 92px;
      height: 92px;
    }

    p:first-child {
      font-family: ${titleFont};
      font-size: 3.125vw;
      font-style: normal;
      font-weight: 800;
      @media (max-width: 767px) {
        font-size: 24px;
      }
    }
  }
`;
