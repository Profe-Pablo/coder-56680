import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height:100,
        backgroundColor:"#fe5e41",
        justifyContent:"flex-end",
        paddingBottom:10,
        paddingLeft:10,
    },
    headerTitle: {
        color: "#fff",
        fontWeight:"bold",
        fontSize:20,
    }
})