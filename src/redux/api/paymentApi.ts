import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
  reducerPath: "ambassador",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donation-platform-server.vercel.app",
  }),
  tagTypes: ["ambassador"],
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/ambassador-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ambassador"],
    }),
    getAmabassadorPayment: builder.query({
      query: () => ({
        url: "/payments-history",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreatePaymentMutation, useGetAmabassadorPaymentQuery } =
  paymentApi;
