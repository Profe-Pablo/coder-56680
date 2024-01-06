import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import shopReducer from '../features/shop/shopSlice'
import cartReducer from "../features/shop/cartSlice"
import { shopApi } from "../services/shopService"
import { authApi } from "../services/AuthService"
import authReducer from "../features/auth/authSlice"

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(shopApi.middleware)
    .concat(authApi.middleware)
    
})

setupListeners(store.dispatch);

export default store;
