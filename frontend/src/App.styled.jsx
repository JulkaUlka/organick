import styled from "styled-components";

export const mainFont = '"Open Sans", sans-serif';
export const titleFont = '"Roboto", sans-serif';
export const italicFont = '"Yellowtail", cursive';
export const mainColor = "#525C60";
export const accentColor = "#7EB693";
export const titleColor = "#274C5B";
export const bgColor = "#F9F8F8";
export const bgColorSecondary = "#F1F8F4";
export const btnColor = "#EFD372";
export const whiteColor = "#FFF";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 320px) {
    width: 95%;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1280px) {
    width: 80%;
  }
`;
