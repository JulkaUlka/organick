import React, { useState, useEffect } from "react";
import { ProductList } from "../../components/ProductList/ProductList";
import { ProductListStyled, ProductContainer } from "./Products.styled";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";
import { Title, SubTitle } from "../../pages/Home/Home.styled";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/operations";
import {
  selectProducts,
  selectIsLoadind,
} from "../../redux/products/selectors";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoadind = useSelector(selectIsLoadind);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? products.length : 8;

  const sortedProducts = [...products].sort((a, b) => {
    if (a.discount && !b.discount) return -1;
    if (!a.discount && b.discount) return 1;
    return 0;
  });

  return (
    <>
      <ProductContainer>
        <SubTitle>Categories</SubTitle>
        <Title>Our Products:</Title>

        {isLoadind && <Loader />}
        <ProductListStyled>
          {sortedProducts.slice(0, itemsToShow).map((product) => (
            <ProductList {...product} key={product._id} />
          ))}
        </ProductListStyled>
        {!showAll ? (
          <ButtonArrowStyled
            type="button"
            margins="80px auto"
            onClick={() => setShowAll(!showAll)}
            rel="noopener
        noreferrer"
          >
            Load More <Arrow />
          </ButtonArrowStyled>
        ) : (
          <ButtonArrowStyled
            type="button"
            margins="80px auto"
            onClick={() => setShowAll(!showAll)}
            rel="noopener
        noreferrer"
          >
            Hide All <Arrow />
          </ButtonArrowStyled>
        )}
      </ProductContainer>
    </>
  );
}
