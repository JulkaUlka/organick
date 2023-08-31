import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Quantity } from "../../components/Quantity /Quantity";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { Arrow } from "../../components/Arrow/Arrow";
import { OrderedForm } from "../../components/OrderedForm/OrderedForm";
import { Container } from "../../App.styled";
import {
  Discount,
  Price,
  ProductImg,
} from "../../components/ProductList/ProductList.styled";
import { Title } from "../../components/ProductInfo/Productinfo.styled";
import { Cart, List, Item, ImageWrapper, Total } from "./CartPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cart/cartSlice";
import { Banner } from "../../components/Banner/Banner";
import cart from "../../img/cart.png";
import { TitleStyled } from "../SuccessPage/SuccessPage.styled";
import { Footer } from "../../components/Footer/Footer";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handleRemoveFromCart = (item) => {
    dispatch(deleteFromCart({ path: item.path }));
  };

  const handleQuantityChange = (newQuantity, item) => {
    dispatch(addToCart({ ...item, quantity: newQuantity }));
  };

  const toOrderHandler = () => {
    setIsOrder(true);
  };
  const totalCost = cartItems.reduce(
    (a, c) => a + (c.price - c.discount) * c.quantity,
    0
  );
  return (
    <section>
      <Banner img={cart}>
        {" "}
        <TitleStyled>Cart</TitleStyled>
      </Banner>
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
                  width="4rem"
                  text="x"
                  showArrow={false}
                  handleQuantityChange={(e) =>
                    handleQuantityChange(+e.target.value, item)
                  }
                />
              </Item>
            ))}
          </List>
          <Total>Total Cost {totalCost}$</Total>
          <Total>
            Discount{" "}
            {cartItems.reduce((a, c) => a + c.discount * c.quantity, 0)}$
          </Total>
          {isOrder ? (
            <OrderedForm cart={cartItems} total={totalCost} />
          ) : (
            <ButtonArrowStyled
              margins="0 auto"
              onClick={(event) => {
                event.preventDefault();
                toOrderHandler();
              }}
            >
              To order
              <Arrow />
            </ButtonArrowStyled>
          )}
        </Container>
      </Cart>
      <Footer />
    </section>
  );
}

export default CartPage;
