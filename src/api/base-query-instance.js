import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jsonRequestHeaders } from './request-headers.js'

export const baseQuery = () => fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    Object.entries(jsonRequestHeaders).map(([key, value]) => {
      headers.set(key, value)
    })
    return headers
  },
})