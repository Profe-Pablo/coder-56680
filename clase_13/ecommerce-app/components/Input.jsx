import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../global/colors'

const Input = ({ label, onChange, error = "", isSecure = false }) => {
    const [input, setInput] = useState("")

    const onHandleChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={onHandleChangeText}
                secureTextEntry={isSecure}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center',
        width: '70%'
    },
    input:{
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius: 10,
        width: '90%',
        backgroundColor: colors.primaryBack,
        color: "#fff",
        padding: 8
    },
    label:{
        fontFamily:'Montserrat-Bold',
        color: "#fff",
        paddingLeft:5,
        marginBottom:4,
    }
})