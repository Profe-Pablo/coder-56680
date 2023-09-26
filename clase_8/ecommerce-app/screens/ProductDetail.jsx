import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import products_data from "../data/products_data.json";
import { colors } from '../global/colors';

const ProductDetail = ({ productId, returnHomeHandlerEvent }) => {

  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const productFinded = products_data.find(product => product.id === productId)
    setProductSelected(productFinded)
    setIsLoading(false)
  }, [productId])

  return (
    <>
      {
        isLoading
          ?
          <ActivityIndicator />
          :
          <View>
            <Header title="Detalle del producto" returnHomeHandlerEvent={returnHomeHandlerEvent} />
            <View>
              <Image
                source={{ uri: productSelected.images[0] }}
                resizeMode='cover'
                style={styles.imageProduct}
              />
              <View style={styles.detailContainer}>
                <Text style={styles.title}>{productSelected.title}</Text>
                <Text style={styles.description}>{productSelected.description}</Text>
                <Text style={styles.price}>$ {productSelected.price}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => null}>
                  <Text style={styles.buyText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      }
    </>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,

  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.secondary
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.success,
    borderRadius: 10,
  },
  buyText: {
    color: '#fff'
  },
})