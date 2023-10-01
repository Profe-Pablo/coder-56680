import {
    StyleSheet,
    Text,
    Image,
    Pressable,
    useWindowDimensions
} from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({ item, navigation }) => {

    const { height, width } = useWindowDimensions();

    

    return (
        <Card>
            <Pressable onPress={()=>navigation.navigate("Detalles")} style={styles.containerProductItem}>
                <Text style={
                    width < 350
                        ?
                        styles.titleProductItemMin
                        :
                        styles.titleProductItem}>
                    {item.title}
                </Text>
                <Image
                    style={styles.imageProductItem}
                    resizeMode='cover'
                    source={{ uri: item.images[0] }}
                />
            </Pressable>
        </Card>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    titleProductItem: {
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 20,
        width: '65%',
    },
    titleProductItemMin: {
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 20,
        width: '65%',
        fontSize: 12,
    },
    imageProductItem: {
        minWidth: 60,
        width: '30%',
    },
})