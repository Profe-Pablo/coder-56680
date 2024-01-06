import { Platform, Pressable, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { Ionicons } from '@expo/vector-icons'; 

const Header = ({ title, navigation }) => {
  //console.log(navigation)
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {
        navigation.canGoBack()?
        <Pressable onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        :null
      }
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: colors.primary,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'Montserrat-Bold'
  }
})