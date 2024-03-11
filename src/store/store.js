import { itemsApi, itemsSlice } from '../modules/items-display/index.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [itemsApi.reducerPath]: itemsApi.reducer,
  itemsReducer: itemsSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(itemsApi.middleware),
})