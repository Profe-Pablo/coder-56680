import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice'

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState()
    const count = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.counterContainer}>
            <View style={styles.buttonUnitContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <Text style={styles.count}>{count}</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.text}>+</Text>
                </Pressable>
            </View>
            <View style={styles.buttonAmountContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Cantidad a aumentar'
                    inputMode='numeric'
                    value={inputToAdd}
                    onChangeText={text => setInputToAdd(Number(text))}
                />
                <Pressable 
                    onPress={()=>dispatch(incrementByAmount(inputToAdd))}
                    style={styles.button}
                >
                    <Text style={styles.text}>Aumentar</Text>
                </Pressable>
            </View>
            <View style={styles.buttonConfirmContainer}>
                <Pressable 
                    onPress={() => dispatch(reset())}
                    style={styles.buttonReset}
                >
                    <Text style={styles.text}>Resetear</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer: {
        gap: 10,
        marginHorizontal: 70,
        padding: 20,
        borderColor: '#ccc',
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: '#EFEFEF'
    },
    buttonUnitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6c464e',
        padding: 12,
    },
    buttonReset: {
        backgroundColor: '#4a3f33',
        padding: 12,
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    count: {
        width: '80%',
        textAlign: 'center',
        fontSize: 16,
    },
    buttonAmountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        paddingRight: 5,
    }
})