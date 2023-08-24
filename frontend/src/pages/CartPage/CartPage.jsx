import React, { useState } from "react";
import { useContext } from "react";
import { Quantity } from "../../components/Quantity /Quantity";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";
import { OrderedForm } from "../../components/OrderedForm/OrderedForm";
import { Container } from "../../App.styled";
import { Store } from "../../helpers/store";
import {
  Discount,
  Price,
  ProductImg,
} from "../../components/ProductList/ProductList.styled";
import { Title } from "../../components/ProductInfo/Productinfo.styled";
import { Cart, List, Item, ImageWrapper, Total } from "./CartPage.styled";

function CartPage() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const handleRemoveFromCart = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const handleQuantityChange = (newQuantity, item) => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity: newQuantity },
    });
  };
  const [isOrder, setIsOrder] = useState(false);

  const toOrderHandler = () => {
    setIsOrder(true);
  };

  return (
    <Cart>
      <Container>
        <List>
          {cartItems.map((item) => (
            <Item key={item._id}>
              <ImageWrapper>
                <ProductImg src={item.image} alt={item.name} />
              </ImageWrapper>
              <Title>{item.name}</Title>
              <div>
                {item.discount ? <Discount>${item.price}</Discount> : null}
                <Price>${item.price - item.discount}</Price>
              </div>
              <Quantity
                onAction={() => handleRemoveFromCart(item)}
                inputValue={item.quantity}
                text="X"
                showArrow={false}
                handleQuantityChange={(e) =>
                  handleQuantityChange(+e.target.value, item)
                }
              />
            </Item>
          ))}
        </List>
        <Total>
          Total Cost{" "}
          {cartItems.reduce(
            (a, c) => a + (c.price - c.discount) * c.quantity,
            0
          )}
          $
        </Total>
        <Total>
          Discount {cartItems.reduce((a, c) => a + c.discount * c.quantity, 0)}$
        </Total>
        {isOrder ? (
          <OrderedForm />
        ) : (
          <ButtonArrowStyled margins="0 auto" onClick={toOrderHandler}>
            To order
            <Arrow />
          </ButtonArrowStyled>
        )}
      </Container>
    </Cart>
  );
}

export default CartPage;
