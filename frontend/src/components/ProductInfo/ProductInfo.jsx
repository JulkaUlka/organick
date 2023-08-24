import React, { useState, useContext } from "react";

import {
  Backdrop,
  Modal,
  CategoryModal,
  Block,
  ImageWrap,
  Image,
  Text,
  ModalButton,
  Title,
  TextWrap,
} from "./Productinfo.styled";
import { Discount, Price } from "../ProductList/ProductList.styled";
import { Container, titleColor } from "../../App.styled";
import { ButtonStyled } from "../Button/Button.styled";
import { Rating } from "../Raiting/Raiting";
import { Quantity } from "../Quantity /Quantity";
import { Store } from "../../helpers/store";

export const ProductInfo = ({ onOpenModal, selectedProduct }) => {
  const [activeButton, setActiveButton] = useState("description");
  const [productQuantity, setProductQuantity] = useState(1);

  const activityHandler = (buttonName) => {
    setActiveButton(buttonName);
  };

  const {
    name,
    category,
    image,
    price,
    discount,
    rating,
    info,
    description,
    additionalInfo,
  } = selectedProduct || {};

  const activeText =
    activeButton === "description" ? description : additionalInfo;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setProductQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const existItem = cart.cartItems.find(
      (x) => x.path === selectedProduct.path
    );
    const quantity = existItem
      ? existItem.quantity + productQuantity
      : productQuantity;

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...selectedProduct, quantity },
    });

    onOpenModal();
  };
  const closeModal = () => {
    onOpenModal();
  };

  return (
    <>
      <Backdrop onClick={closeModal}>
        <Modal onClick={(e) => e.stopPropagation()} className="modal">
          <Container>
            <Block distance="5.5vw">
              <ImageWrap>
                <CategoryModal>{category}</CategoryModal>
                <Image src={image} alt={name} />
              </ImageWrap>
              <TextWrap>
                <Title>{name}</Title>
                <Rating rating={rating} />
                <div>
                  {discount ? <Discount>${price}</Discount> : null}
                  <Price>${price - discount}</Price>
                </div>
                <Text aligning="start">{info}</Text>
                <Quantity
                  onAction={handleAddToCart}
                  inputValue={productQuantity}
                  handleQuantityChange={handleQuantityChange}
                  text="Add To Cart"
                  showArrow={true}
                />
              </TextWrap>
            </Block>
            <Block distance="1.25rem">
              <ButtonStyled
                type="button"
                onClick={() => activityHandler("description")}
                backgroundColor={
                  activeButton === "description" ? "#EFF6F1" : titleColor
                }
                textColor={activeButton === "description" ? titleColor : "#FFF"}
              >
                Product Description
              </ButtonStyled>
              <ButtonStyled
                type="button"
                onClick={() => activityHandler("additional")}
                backgroundColor={
                  activeButton === "additional" ? "#EFF6F1" : titleColor
                }
                textColor={activeButton === "additional" ? titleColor : "#FFF"}
              >
                Additional Info
              </ButtonStyled>
            </Block>
            <Text aligning="center" width="80%">
              {activeText}
            </Text>
            <ModalButton onClick={closeModal}>X</ModalButton>
          </Container>
        </Modal>
      </Backdrop>
    </>
  );
};
