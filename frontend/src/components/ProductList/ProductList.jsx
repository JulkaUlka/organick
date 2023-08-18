import React, { useState } from "react";
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

export function ProductList({
  category,
  name,
  path,
  image,
  price,
  discount,
  rating,
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModalHandler = () => {
    setIsModalOpened(true);
  };

  const selectProductHandler = async () => {
    const { data } = await axios.get(`/api/products`);
    const foundProduct = data.find((p) => p.path === path);
    setSelectedProduct(foundProduct);
    openModalHandler();
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
        <ProductInfo
          onOpenModal={() => setIsModalOpened(false)}
          isShown={isModalOpened}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
}
