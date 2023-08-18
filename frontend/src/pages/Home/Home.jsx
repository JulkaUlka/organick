import React, { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductList/ProductList";
import axios from "axios";
import {
  ProductListStyled,
  SubTitle,
  Title,
  HomeContainer,
} from "./Home.styled";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? products.length : 8;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await axios.get("/api/products");
        setProducts(result.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (a.discount && !b.discount) return -1;
    if (!a.discount && b.discount) return 1;
    return 0;
  });

  return (
    <>
      <HomeContainer>
        <SubTitle>Categories</SubTitle>
        <Title>Our Products:</Title>
        <ProductListStyled>
          {sortedProducts.slice(0, itemsToShow).map((product) => (
            <ProductList {...product} key={product.path} />
          ))}
        </ProductListStyled>
        {!showAll ? (
          <ButtonArrowStyled
            type="buttton"
            margins="80px auto"
            onClick={() => setShowAll(!showAll)}
          >
            Load More <Arrow />
          </ButtonArrowStyled>
        ) : (
          <ButtonArrowStyled
            type="buttton"
            margins="80px auto"
            onClick={() => setShowAll(!showAll)}
          >
            Hide All <Arrow />
          </ButtonArrowStyled>
        )}
      </HomeContainer>
    </>
  );
}

export default Home;
