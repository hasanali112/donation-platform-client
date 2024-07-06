import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donation-platform-server.vercel.app",
  }),
  tagTypes: ["news"],
  endpoints: (builder) => ({
    createNews: builder.mutation({
      query: (data) => ({
        url: "/create-news",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["news"],
    }),

    getAllNews: builder.query({
      query: () => ({
        url: `/news`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
    getNewsById: builder.query({
      query: (id) => ({
        url: `/news/${id}`,
        method: "GET",
      }),
      providesTags: ["news"],
    }),
  }),
});

export const {
  useCreateNewsMutation,
  useGetAllNewsQuery,
  useGetNewsByIdQuery,
} = newsApi;
