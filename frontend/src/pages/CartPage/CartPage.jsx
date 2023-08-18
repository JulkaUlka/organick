import React, { useState } from "react";
import { useContext } from "react";
import { Quantity } from "../../components/Quantity /Quantity";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";
import { OrderedForm } from "../../components/OrderedForm/OrderedForm";
import { Container } from "../../App.styled";
import { Store } from "../../helpers/store";

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
    <>
      <Container>
        <ul>
          {cartItems.map((item) => (
            <li key={item.path}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <p>{item.name}</p>
              {item.discount ? <p>${item.price}</p> : null}
              <p>${item.price - item.discount}</p>
              <Quantity
                onAction={() => handleRemoveFromCart(item)}
                inputValue={item.quantity}
                text="X"
                showArrow={false}
                handleQuantityChange={(e) =>
                  handleQuantityChange(+e.target.value, item)
                }
              />
            </li>
          ))}
        </ul>
        <p>
          Total Cost{" "}
          {cartItems.reduce(
            (a, c) => a + (c.price - c.discount) * c.quantity,
            0
          )}
          $
        </p>
        <p>
          Discount {cartItems.reduce((a, c) => a + c.discount * c.quantity, 0)}$
        </p>
        {!isOrder && (
          <ButtonArrowStyled onClick={toOrderHandler}>
            To order
            <Arrow />
          </ButtonArrowStyled>
        )}
        {isOrder && <OrderedForm />}
      </Container>
    </>
  );
}

export default CartPage;
