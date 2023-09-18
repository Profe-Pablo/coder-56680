import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({ category }) => {
    return (
        <Pressable onPress={() =>
            console.log("Category pressed: " + category)}
        >
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        marginVertical: 4,
        paddingVertical: 30,
        paddingLeft: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    }
})