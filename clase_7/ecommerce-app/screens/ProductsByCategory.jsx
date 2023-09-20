import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import products_data from '../data/products_data.json'
import Header from '../components/Header'


const ProductsByCategory = ({ category,returnHomeHandlerEvent }) => {

  const [productsByCategory, setProductsByCategory] = useState();

  useEffect(() => {
    const productsFilterByCategory = products_data.filter(product => product.category == category)
    setProductsByCategory(productsFilterByCategory)
  }, [category])

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem item={item} />
    )
  }

  return (
    <>

      <Header title="Productos" returnHomeHandlerEvent={returnHomeHandlerEvent} />
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