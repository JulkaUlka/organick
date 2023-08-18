import React, { useState, useEffect, useReducer } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
 
  const [{ loading, error, products }, dispatch] = useReducer((reducer), {
    products: [],
    loading: true,
    error: '',
  });
  
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? products.length : 8;

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
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
