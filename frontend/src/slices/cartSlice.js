import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils.js";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      //check if the item is already in the card, if x._id (current item) is === to the item._id (from the payload) then it will be put in that variable
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        //add a new item
        //we don't do the push method because state cannot be changed (immutable)so we make a copy of this state in addition to the new item
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      // return all the other cart items which are not equal to the one we want to delete (action.payload which is the delete action of the id of the item we want to remove)
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      // update localStorage
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
