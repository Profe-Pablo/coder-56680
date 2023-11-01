import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import shopReducer from '../features/shop/shopSlice'
import { shopApi } from "../services/shopService"

const store = configureStore({
    reducer: {
        shopReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch);

export default store;
