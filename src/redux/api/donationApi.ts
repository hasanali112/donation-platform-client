import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donationApi = createApi({
  reducerPath: "payment",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donation-platform-server.vercel.app",
  }),
  tagTypes: ["paymentpost"],
  endpoints: (builder) => ({
    addPayment: builder.mutation({
      query: (data) => ({
        url: "/donation-pay",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["paymentpost"],
    }),
    getPayment: builder.query({
      query: () => ({
        url: "/payments",
        method: "GET",
      }),
    }),
    paymentByUserEmail: builder.query({
      query: (email) => ({
        url: `/user-donation-payments/${email}`,
        method: "GET",
      }),
    }),

    getAllState: builder.query({
      query: () => ({
        url: "/get-all-state",
        method: "GET",
      }),
    }),

    getCalculationAmount: builder.query({
      query: () => ({
        url: "/amount-calculation",
        method: "GET",
      }),
    }),

    getPaymentById: builder.query({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "GET",
      }),
      providesTags: ["paymentpost"],
    }),
  }),
});

export const {
  useAddPaymentMutation,
  useGetPaymentQuery,
  useGetCalculationAmountQuery,
  useGetPaymentByIdQuery,
  useGetAllStateQuery,
  usePaymentByUserEmailQuery,
} = donationApi;
