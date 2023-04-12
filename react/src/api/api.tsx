import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://api.themoviedb.org/3/';

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
  }),
});

export const { useGetMoviesQuery } = api;
