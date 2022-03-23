import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postQuery = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8003/api/v1' }),
  endpoints: builder => ({
    getPostByName: builder.query({
      query: (slug: string) => `post/${slug}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPostByNameQuery } = postQuery
