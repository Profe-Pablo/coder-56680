import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProductItem from '../components/ProductItem'
import products_data from '../data/products_data.json'
import Header from '../components/Header'

const ProductsByCategory = () => {

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem item={item} />
    )
  }

  return (
    <>
      <Header title="Productos" />
      <FlatList
        data={products_data}
        renderItem={renderProductItem}
        keyExtractor={item=>item.id}
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})