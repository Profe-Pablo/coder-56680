import { StyleSheet, View, TextInput, Button } from "react-native"


export default CustomItemInput = (
    { placeholderProp,
        textItemProp,
        OnchangeTextHandlerEvent,
        addItemToListEvent }
) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={OnchangeTextHandlerEvent}
                value={textItemProp}
            />
            <Button onPress={addItemToListEvent} title="Add" />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: 300,
    },
})