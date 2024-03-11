import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { jsonRequestHeaders } from './request-headers.js'

export const baseQuery = () => retry(fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      Object.entries(jsonRequestHeaders).map(([key, value]) => {
        headers.set(key, value)
      })
      return headers
    },
  }),
  { maxRetries: 4 },
)