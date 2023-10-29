import { FlatList, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoryItem from '../components/CategoryItem'
//import categories_data from '../data/categories_data.json'
import { useSelector } from 'react-redux'


const Categories = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.categories)
  const renderCategoryItem=({item})=>{
    return(
      <CategoryItem category={item} navigation={navigation} />
    )
  }

  return (
    <>
      <FlatList
       data={categories}
       renderItem={renderCategoryItem}     
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})