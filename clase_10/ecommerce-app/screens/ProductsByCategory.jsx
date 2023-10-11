import { StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import products_data from '../data/products_data.json'
import Search from '../components/Search'


const ProductsByCategory = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState();
  const [search, setSearch] = useState('')

  const {category} = route.params

  useEffect(() => {
    const productsFilteredByCategory = products_data.filter(product => product.category == category)
    const productsFiltered = productsFilteredByCategory.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setProductsByCategory(productsFiltered)
  }, [category, search])

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem item={item} navigation={navigation} />
    )
  }

  const onSearch = (search) =>{
    setSearch(search)
  }

  return (
    <>
      <Search onSearchHandlerEvent={onSearch} />
      <FlatList
        data={productsByCategory}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})