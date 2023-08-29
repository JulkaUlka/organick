import React, { useState} from "react";
import { Link } from "react-router-dom";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { Rating } from "../Raiting/Raiting";

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

import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

export function ProductList({
  category,
  name,
  image,
  price,
  discount,
  rating,
  _id,
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const closeModal = () => {
    setIsModalOpened(false);
  };
  const openModalHandler = () => {
    setIsModalOpened(true);
  };

  const products = useSelector(selectProducts);

  const selectProductHandler = async () => {
    openModalHandler();

    const product = products.find((p) => p._id === _id);

    setSelectedProduct(product);
  
  }
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
        <ProductInfo onOpenModal={closeModal} selectedProduct={selectedProduct} />
      )}
    </>
  );
}
