import { FlatList, StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoryItem from '../components/CategoryItem'
//import categories_data from '../data/categories_data.json'
//import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/shopService'


const Categories = ({navigation}) => {

  //const categories = useSelector(state=>state.shopReducer.categories)
  const {data,isLoading, error} = useGetCategoriesQuery();

  const renderCategoryItem=({item})=>{
    return(
      <CategoryItem category={item} navigation={navigation} />
    )
  }

  return (
    <>
      <FlatList
       data={data}
       renderItem={renderCategoryItem}     
      />
    </>
  )
}

export default Categories

const styles = StyleSheet.create({})