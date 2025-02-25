import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/types";

export const userApi = createApi({
  reducerPath: "userAPI", // 🗂️ Unique key for the slice of state
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/", // 🌐 Base URL for API requests
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users", // 🚀 Fetch all users from the endpoint
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`, // 🚀 Fetch a user by ID from the endpoint
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
