import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { donationApi } from "./api/donationApi";
import { userApi } from "./api/userApi";
import { newsApi } from "./api/newsApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [donationApi.reducerPath]: donationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApi.middleware,
      donationApi.middleware,
      userApi.middleware,
      newsApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
