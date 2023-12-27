import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import shopReducer from '../features/shop/shopSlice'
import cartReducer from "../features/shop/cartSlice"
import { shopApi } from "../services/shopService"

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch);

export default store;
