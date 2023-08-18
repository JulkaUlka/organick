import React, { useState } from "react";
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

export const ProductInfo = ({ onOpenModal, isShown, selectedProduct }) => {
  const [activeButton, setActiveButton] = useState("description");

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

    
    const handleAddToCart = () => {
     
    };
  


  return (
    <>
      <Backdrop>
        <Modal>
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
                  <Discount>${price}</Discount>
                  <Price>${price - discount}</Price>
                </div>
                <Text aligning="start">{info}</Text>
                <Quantity onAction={handleAddToCart} text="Add To Cart" showArrow={true}/>
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
            <ModalButton onClick={onOpenModal}>X</ModalButton>
          </Container>
        </Modal>
      </Backdrop>
    </>
  );
};
