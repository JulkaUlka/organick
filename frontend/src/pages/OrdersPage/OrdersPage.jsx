import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { Container } from "../../App.styled";
import {
  Block,
  Text,
  Title,
} from "../../components/ProductInfo/Productinfo.styled";
import { OrderList, OrderItem, PageTitle } from "./OrdersPage.styled";
import { Loader } from "../../components/Loader/Loader";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function OrdersPage() {
  const [{ loading, orders }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const getOrders = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/orders");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    getOrders();
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Container>
        <OrderList>
          <PageTitle>Your orders:</PageTitle>
          {orders.map((order) => (
            <OrderItem {...order} key={order._id}>
              {order.orderItems.map((orderItem) => (
                <Block wrapping="no-wrap" key={orderItem._id}>
                  <img
                    src={orderItem.image}
                    alt={orderItem.name}
                    width="100"
                    height="130"
                  />
                  <Text>{orderItem.name}</Text>
                  <Text>quantity: {orderItem.quantity}</Text>
                </Block>
              ))}
              <Block wrapping="no-wrap">
                <Text aligning="start">{order.shippingAddress.fullName}</Text>
                <Text aligning="start">{order.shippingAddress.address}</Text>
                <Text aligning="start">{order.shippingAddress.phone}</Text>
                <Title>{order.totalPrice}$</Title>
              </Block>
            </OrderItem>
          ))}
        </OrderList>
      </Container>
    </>
  );
}

export default OrdersPage;
