import { Quantity } from "../../components/Quantity /Quantity";



function CartPage() {

  const handleRemoveFromCart = () => {
    // Логіка видалення з корзини
  };

  return (
    <>
    <Quantity onAction={handleRemoveFromCart} text="X" showArrow={false}/>
    </>
  );
}

export default CartPage;
