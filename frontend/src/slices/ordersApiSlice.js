import { apiSlice } from "./apiSlice.js";
import { ORDERS_URL } from "../constants.js";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: order,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
