import styled from "styled-components";
import { Title } from "../../components/ProductInfo/Productinfo.styled";

export const Cart = styled.section`
  background-color: rgba(253, 176, 45, 0.16);
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const ImageWrapper = styled.div`
  background-color: rgb(195 170 126 / 9%);
  border-radius: 16px;
  width: 292px;
  height: auto;
`;
export const Total = styled(Title)`
  text-align: right;
  margin-top: 32px;
`;
