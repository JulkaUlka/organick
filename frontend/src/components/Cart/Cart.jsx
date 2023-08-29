import { LinkStyled, CartIcon, Quntity, Wrapper } from "./Cart.styled";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../redux/cart/selectors";
import { titleColor } from "../../App.styled";

export const Cart = () => {
  const cartItems = useSelector(selectCartProducts);
  const hasItems = cartItems.length > 0;
  return (
    <div>
      <LinkStyled to="/cart">
        <Wrapper>
          <CartIcon icon={faCartShopping} />
        </Wrapper>
        <Quntity>Cart (<span style={{ color: hasItems ? '#F00' : titleColor }}>{cartItems.reduce((a, c) => a + c.quantity, 0)}</span>)</Quntity>
      </LinkStyled>
    </div>
  );
};
