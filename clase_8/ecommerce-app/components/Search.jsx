import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors';


const Search = ({ onSearchHandlerEvent }) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState("")


    const onSearchHandler = (search) => {
        const regEx = /[^\w\s]/ //Expresión regular para evaluar que no se escriban caracteres especiales
        if (regEx.test(searchInput)) {
            setError("Solo se admiten letras y números")
            setSearchInput("")
        }
        else {
            setError("")
            onSearchHandlerEvent(search)
        }

    }

    const onResetSearchHandler = () => {
        setSearchInput("")
        setError("")
        onSearchHandlerEvent(searchInput)

    }

    return (
        <>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={searchInput}
                    onChangeText={setSearchInput} //En este caso no utilizamos una función handler
                    placeholder="Buscar producto..."
                />

                <Pressable onPress={() => onSearchHandler(searchInput)}>
                    <EvilIcons name="search" size={24} color="gray" />
                </Pressable>
                <Pressable onPress={onResetSearchHandler}>
                    <Entypo name="cross" size={24} color="gray" />
                </Pressable>
            </View>
            {error
                ?
                <View style={styles.errorMessageContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
                :
                null
            }
        </>

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
    },
    errorMessageContainer: {
        padding:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText:{
        color:colors.error,
    }
})