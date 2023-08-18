
import { LinkStyled, CartIcon, Quntity, Wrapper } from "./Cart.styled";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



export const Cart = () => {
    let cartCounter = 0;
  return (
    <div>
      <LinkStyled to="/cart">
        <Wrapper>
        <CartIcon icon={faCartShopping} />
        </Wrapper>
       <Quntity>{`Cart (${cartCounter})`}</Quntity>
      </LinkStyled>
    </div>
  );
};


