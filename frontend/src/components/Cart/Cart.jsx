import { LinkStyled, CartIcon, Quntity, Wrapper } from "./Cart.styled";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { Store } from "../../helpers/store";
import { titleColor } from "../../App.styled";

export const Cart = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const hasItems = cart.cartItems.length > 0;
  return (
    <div>
      <LinkStyled to="/cart">
        <Wrapper>
          <CartIcon icon={faCartShopping} />
        </Wrapper>
        <Quntity>Cart (<span style={{ color: hasItems ? '#F00' : titleColor }}>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>)</Quntity>
      </LinkStyled>
    </div>
  );
};
