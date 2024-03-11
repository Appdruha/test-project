import { createSlice } from '@reduxjs/toolkit'
import { itemsApi } from '../api/items-api.js'

const initialState = {
  brands: [],
}

export const itemsSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(itemsApi.endpoints.getBrands.matchFulfilled, (state, action) => {
      state.brands = action.payload
    })
  },
})

