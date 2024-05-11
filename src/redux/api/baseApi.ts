import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "donation",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donation-platform-server.vercel.app",
  }),
  tagTypes: ["donationpost"],
  endpoints: (builder) => ({
    addDonationPost: builder.mutation({
      query: (data) => ({
        url: "/create-donation",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donationpost"],
    }),
    getDonationPost: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donationpost"],
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
      invalidatesTags: ["donationpost"],
    }),
    delateDonationPost: builder.mutation({
      query: (id) => ({
        url: `/donation-post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["donationpost"],
    }),
  }),
});

export const {
  useAddDonationPostMutation,
  useGetDonationPostQuery,
  useGetDonationPostByIdQuery,
  useUpadateDonationPostMutation,
  useDelateDonationPostMutation,
} = baseApi;
