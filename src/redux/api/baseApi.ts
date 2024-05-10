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
  }),
});

export const { useAddDonationPostMutation } = baseApi;
