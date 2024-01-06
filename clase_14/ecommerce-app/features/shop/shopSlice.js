import { createSlice } from "@reduxjs/toolkit";
import products_data from '../../data/products_data.json'
import categories_data from '../../data/categories_data.json'

export const shopSlice = createSlice({
    name:'shop',
    initialState: {
        categorySelected: '',
        productIdSelected: null,
        products: products_data,
        productsFilteredByCategory: [],
        categories: categories_data
    },
    reducers: {
        setCategorySelected: (state,action) => { 
            state.categorySelected = action.payload
            state.productsFilteredByCategory = products_data.filter(product => product.category === state.categorySelected)
        },
        setProductIdSelected: (state,action) => {
            state.productIdSelected = action.payload
        },
    }
})

export const {setCategorySelected, setProductIdSelected} = shopSlice.actions

export default shopSlice.reducer

