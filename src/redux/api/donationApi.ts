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

    getPaymentById: builder.query({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "GET",
      }),
      providesTags: ["paymentpost"],
    }),
  }),
});

export const { useAddPaymentMutation, useGetPaymentByIdQuery } = donationApi;
