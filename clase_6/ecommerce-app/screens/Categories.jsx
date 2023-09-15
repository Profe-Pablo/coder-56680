import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import categories_data from '../data/categories_data.json'

const Categories = () => {
  //console.log(categories_data)
  return (
    <>
      <Header title="Categorías" />
      <FlatList
       data={categories_data}
       renderItem={({item})=><Text>{item}</Text>}     
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})