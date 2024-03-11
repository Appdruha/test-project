import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../../../api/index.js'

export const itemsApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: baseQuery(),
  endpoints: (build) => ({
    getBrands: build.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response) => {
        return [...new Set(response.result.filter(brand => brand !== null))]
      },
      transformErrorResponse: (response) => {
        return response
      }
    }),
    getIds: build.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response) => {
        return response.result
      },
      transformErrorResponse: (response) => {
        return response
      }
    }),
    getItems: build.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response) => {
        const result = []
        response.result.forEach(item => {
          if (result.find(el => el.id === item.id)) {
            return
          } else {
            result.push(item)
          }
        })
        return result
      },
      transformErrorResponse: (response) => {
        return response
      }
    }),
  }),
})

export const {useGetIdsMutation, useGetItemsMutation, useGetBrandsMutation} = itemsApi