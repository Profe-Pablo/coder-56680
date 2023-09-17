import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/CategoryItem'

const Categories = () => {
  //console.log(categories_data)

  const renderCategoryItem=({item})=>{
    return(
      <CategoryItem category={item} />
    )
  }

  return (
    <>
      <Header title="Categorías" />
      <FlatList
       data={categories_data}
       renderItem={renderCategoryItem}     
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})