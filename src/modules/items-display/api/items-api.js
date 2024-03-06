import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../../../api/index.js'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: baseQuery(),
  endpoints: (build) => ({
    getIds: build.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {useGetIdsMutation} = itemsApi