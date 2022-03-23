import { createApi } from '@reduxjs/toolkit/query/react'
import baseQueryWithReauth from '../config/axiosFetchBaseQuery'
export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ payloadLogin }) => ({
        url: 'login',
        method: 'POST',
        body: payloadLogin,
      }),
    }),
    getProfile: builder.query({
      query: pathApi => ({
        url: pathApi,
        method: 'GET',
      }),
    }),
  }),
})
// Export hooks for usage in functional components
export const { useLoginMutation, useGetProfileQuery } = authApi
