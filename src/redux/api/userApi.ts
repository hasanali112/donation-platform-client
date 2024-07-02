import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donation-platform-server.vercel.app",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    getUser: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery } = userApi;
