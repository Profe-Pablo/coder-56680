import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons';


const Search = () => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder="Buscar producto..."
            />
            <Pressable onPress={null}>
                <EvilIcons name="search" size={24} color="gray" />
            </Pressable>
            <Pressable onPress={() => setSearchInput('')}>
                <Entypo name="cross" size={24} color="gray" />
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    searchInput: {
        width: '80%',
        fontFamily: 'Montserrat-Light'
    }
})