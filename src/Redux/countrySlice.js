import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v2/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: ({ endpoint }) => endpoint
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCountriesQuery } = countryApi;
