// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:10000",
    tagTypes: ["Get"],
  }),
  endpoints: (builder) => ({
    getAllStocks: builder.query({
      query: () => ({
        url: `/stocks`,
      }),
    }),
    getStockById: builder.query({
      query: (id) => ({
        url: `/stocks/${id}`,
      }),
    }),
  }),
});

export const { useGetAllStocksQuery, useGetStockByIdQuery } = stocksApi;
