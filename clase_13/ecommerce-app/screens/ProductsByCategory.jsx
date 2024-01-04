import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'
//import products_data from '../data/products_data.json'
import Search from '../components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ProductsByCategory = ({ navigation, route }) => {
  //const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
  const [productsByCategory, setProductsByCategory] = useState();
  const [search, setSearch] = useState('')
  const category = useSelector(state => state.shopReducer.categorySelected)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)


  useEffect(() => {
    //const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    //setProductsByCategory(productsFiltered)
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
    }

  }, [isLoading, category,search])


  const renderProductItem = ({ item }) => {
    return (
      <ProductItem item={item} navigation={navigation} />
    )

  }

  const onSearch = (search) => {
    setSearch(search)
  }


  return (
    <>
      {
        isLoading ?
          <ActivityIndicator />
          :
          <>
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
              data={productsByCategory}
              renderItem={renderProductItem}
              keyExtractor={item => item.id}
            />
          </>
      }
    </>


  )

}

export default ProductsByCategory

const styles = StyleSheet.create({})