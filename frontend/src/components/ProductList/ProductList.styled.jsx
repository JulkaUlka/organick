import styled from "styled-components";

import { titleFont, titleColor, bgColor } from "../../App.styled";

export const ProductImg = styled.img`
  mix-blend-mode: multiply;
  transition: transform 0.5s ease-in-out;
`;
export const ProductBody = styled.div``;

export const ProductItemStyled = styled.li`
  width: 335px;
  height: 483px;
  border-radius: 1.875rem;
  background: ${bgColor};
  padding: 29px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover ${ProductImg} {
    transform: scale(1.1);
  }
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 405px;
  }
`;

export const Category = styled.p`
  padding: 0.3125rem 0.75rem 0.375rem 0.75rem;
  border-radius: 0.5rem;
  background: ${titleColor};
  color: #fff;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  width: 45%;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.p`
  color: ${titleColor};
  font-family: ${titleFont};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: " ";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -15px;
    left: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="276" height="2" viewBox="0 0 276 2" fill="none"><path d="M0.180664 1L275.169 0.999976" stroke="%23DEDDDD"/></svg>')
      center/100% 100% no-repeat;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;
export const Discount = styled.span`
  color: #b8b8b8;
  text-decoration: line-through;
  font-size: 0.9375rem;
  font-weight: 600;
  margin-right: 5px;
`;
export const Price = styled.span`
  color: ${titleColor};
  font-size: 1.125rem;
  font-weight: 700;
`;
export const ImageWrap = styled.div`
  width: 251px;
  height: 334px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 214px;
    height: 256px;
  }
`;
