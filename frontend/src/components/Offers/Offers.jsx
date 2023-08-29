import React from "react";
import { ProductList } from "../../components/ProductList/ProductList";
import { OffersContainer } from "./Offers.styled";
import { ProductListStyled } from "../../components/Products/Products.styled";
import { Title, SubTitle } from "../../pages/Home/Home.styled";
import { whiteColor, Container } from "../../App.styled";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

export function Offers() {
  const products = useSelector(selectProducts);
  const sortedProducts = products.filter(
    (product) => product.category === "Vegetable"
  );
  return (
    <>
      <OffersContainer>
        <Container>
          <SubTitle alighning="left">Offer</SubTitle>
          <Title alighning="left" textColor={whiteColor}>
            We Offer Organic For You
          </Title>
          <ProductListStyled>
            {sortedProducts.slice(0, 4).map((product) => (
              <ProductList {...product} key={product._id}/>
            ))}
          </ProductListStyled>
        </Container>
      </OffersContainer>
    </>
  );
}
