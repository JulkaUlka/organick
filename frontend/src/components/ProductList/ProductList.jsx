import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { Rating } from "../Raiting/Raiting";
import axios from "axios";
import {
  ProductItemStyled,
  ProductBody,
  Category,
  ProductImg,
  ProductTitle,
  PriceBlock,
  Discount,
  Price,
  ImageWrap,
} from "./ProductList.styled";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export function ProductList({
  category,
  name,
  path,
  image,
  price,
  discount,
  rating,
  _id,
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = () => {
    setIsModalOpened(false);
  };
  const openModalHandler = () => {
    setIsModalOpened(true);
  };

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  const selectProductHandler = async () => {
    openModalHandler();
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const { data } = await axios.get(`/api/products`);
      const foundProduct = data.find((p) => p._id === _id);
      dispatch({ type: "FETCH_SUCCESS", payload: foundProduct });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err.message });
    }
  };

  return (
    <>
      <ProductItemStyled>
        <Link to="#" onClick={selectProductHandler}>
          <ProductBody>
            <Category>{category}</Category>
            <ImageWrap>
              <ProductImg src={image} alt={name} />
            </ImageWrap>
            <ProductTitle>{name}</ProductTitle>
            <PriceBlock>
              <div>
                {discount ? <Discount>${price}</Discount> : null}
                <Price>${price - discount}</Price>
              </div>
              <Rating rating={rating} />
            </PriceBlock>
          </ProductBody>
        </Link>
      </ProductItemStyled>
      {isModalOpened && (
        <ProductInfo onOpenModal={closeModal} selectedProduct={product} />
      )}
    </>
  );
}
