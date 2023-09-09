import { StyleSheet, Modal, View, Text, Button } from "react-native"


export default CustomItemModal = (

    {   
        animationTypeProp,
        isVisibleProp,
        itemSelectedProp,
        onDeleteItemHandlerEvent,
        setIsModalVisibleEvent
    }
) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp}>
            <View style={styles.modalMessageContainer}>
                <Text>Se eliminará la tarea:</Text>
                <Text>{itemSelectedProp.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button
                    title="Eliminar"
                    onPress={onDeleteItemHandlerEvent}
                    color='#ef233c'
                />
                <Button
                    title="Cancelar"
                    onPress={() => setIsModalVisibleEvent(!isVisibleProp)}
                    color='#8d99ae'
                />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalMessageContainer: {
        paddingTop: 50,
        alignItems: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    }
})
