import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "donation",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    addDonationPost: builder.mutation({
      query: (data) => ({
        url: "/create-donation",
        method: "POST",
        body: data,
      }),
    }),
    getDonationPost: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
    getDonationPostById: builder.query({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "GET",
      }),
    }),
    upadateDonationPost: builder.mutation({
      query: (option) => ({
        url: `/update-donation-post/${option.id}`,
        method: "PUT",
        body: option.donationData,
      }),
    }),
  }),
});

export const {
  useAddDonationPostMutation,
  useGetDonationPostQuery,
  useGetDonationPostByIdQuery,
  useUpadateDonationPostMutation,
} = baseApi;
