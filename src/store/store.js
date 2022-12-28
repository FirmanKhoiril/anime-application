import { configureStore } from "@reduxjs/toolkit";
import { FetchAnime } from "../utils/FetchAnime";

export const store = configureStore({
  reducer: {
    [FetchAnime.reducerPath]: FetchAnime.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FetchAnime.middleware),
});
