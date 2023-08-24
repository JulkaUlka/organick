// import React, { useContext, useReducer, useEffect } from "react";
// import { Store } from "../../helpers/store";
// import Axios from "axios";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE_REQUEST":
//       return { ...state, loading: true };
//     case "CREATE_SUCCESS":
//       return { ...state, loading: false };
//     case "CREATE_FAIL":
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// };

function SuccessPage() {
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const { cart } = state;

//   cart.totalPrice = cart.cartItems.reduce(
//     (a, c) => a + (c.price - c.discount) * c.quantity,
//     0
//   );

//   const [{ loading }, dispatch] = useReducer(reducer, {
//     loading: false,
//   });

//   useEffect(() => {
//     const placeOrderHandler = async () => {
//         try {
//             dispatch({ type: "CREATE_REQUEST" });
//             console.log('Sending data:', {
//               orderItems: cart.cartItems,
//               shippingAddress: cart.shippingAddress,
//               totalPrice: cart.totalPrice,
//             });
//             const { data } = await Axios.post("/api/orders", {
//               orderItems: cart.cartItems,
//               shippingAddress: cart.shippingAddress,
//               totalPrice: cart.totalPrice,
//             });
       
//             ctxDispatch({ type: "CART_REMOVE_ALL", payload: {} });
//             dispatch({ type: "CREATE_SUCCESS" });
            
//           } catch (err) {
//             dispatch({ type: "CREATE_FAIL" });
//             console.log(err);
//           }
         
//     };

//     placeOrderHandler();
//   }, []);

  return <h1>Thank you for your order</h1>;
}

export default SuccessPage;
