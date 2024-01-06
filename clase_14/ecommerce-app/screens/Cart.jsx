import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
//import cart_data from '../data/cart_data.json'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

const Cart = () => {

  const cart = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    triggerPost({total,cart, user: 'loggedUser'})
  }


  //const [total, setTotal] = useState(0)
  //console.log(total)

  /* useEffect(()=>{
    const total = cart_data.reduce((accumulator, currentItem )=>(
      accumulator+=currentItem.price*currentItem.quantity
    ),0)
    setTotal(total)
  },[cart_data]) */

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  )

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total: ${total}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold'
  },
  confirmButton:{
    backgroundColor: colors.secondary,
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    fontFamily:'Montserrat-Bold',
    fontSize:16,
    color: '#fff'
  }  
})