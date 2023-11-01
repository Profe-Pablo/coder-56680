import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database"

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ()=> 'products.json'
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"` //products.json?orderBy="category"&equalTo="smartphones"
        })
    })
})

export const {useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery} = shopApi;