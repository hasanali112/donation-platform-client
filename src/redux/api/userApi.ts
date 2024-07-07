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

    getAdmin: builder.query({
      query: (email) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getUser: builder.query({
      query: (role) => ({
        url: `/users-role?role=${role}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    roleChange: builder.mutation({
      query: (options) => (
        console.log(options),
        {
          url: `/user-role-change/${options.id}`,
          method: "PATCH",
          body: { role: options.role },
        }
      ),
      invalidatesTags: ["user"],
    }),

    getUserByEmail: builder.query({
      query: ({ query: email }) => ({
        url: `/users/${email}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAdminQuery,
  useGetUserQuery,
  useGetUserByEmailQuery,
  useRoleChangeMutation,
} = userApi;
