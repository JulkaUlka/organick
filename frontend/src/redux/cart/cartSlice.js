import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  shippingAddress: {
    fullName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.items.find((item) => item._id === newItem._id);

      if (existItem) {
        state.items = state.items.map((item) =>
          item._id === existItem._id
            ? { ...item, quantity: newItem.quantity }
            : item
        );
      } else {
        state.items.push(newItem);
      }
    },

    deleteFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.path !== action.payload.path
      );
    },

    deleteAllCart: (state) => {
      state.items = [];
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  
},
});

export const { addToCart, deleteFromCart, deleteAllCart, saveShippingAddress,} =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
