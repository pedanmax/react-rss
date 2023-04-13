import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=7bc9e78d64d6eabc0a158c008db80432';
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['movies'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (param: string) => param,
    }),
    getMovie: builder.query({
      query: (id: number | string) => `movie/${id}?${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = api;
