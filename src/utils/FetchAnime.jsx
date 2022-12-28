import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "https://anime-db.p.rapidapi.com";

export const FetchAnime = createApi({
  reducerPath: "animeApp",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_APP_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenreListAnime: builder.query({ query: (genres) => `anime?page=1&size=20&genres=${genres}` }),
    getDetailsAnime: builder.query({ query: (id) => `anime/by-id/${id}` }),
  }),
});

export const { useGetGenreListAnimeQuery, useGetDetailsAnimeQuery } = FetchAnime;
