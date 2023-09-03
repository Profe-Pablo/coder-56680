import { StyleSheet, TextInput, View, Button, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected,setItemSelected] = useState({})
  const [isModalVisible,setIsModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => 
        [...prevState,{id: Math.random().toString(), value: textItem}]
      )
    setTextItem('')
  }

  const onSelectItemHandler = (id) => {
    setIsModalVisible(!isModalVisible)
    setItemSelected(itemList.find((item)=>item.id===id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item)=> item.id!==itemSelected.id))
    setItemSelected({})
    setIsModalVisible(!isModalVisible)
  }

  const renderListItem = ({item}) => {
    return(
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
        <Button onPress={()=>onSelectItemHandler(item.id)} title='x' />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Ingresá la tarea'
          onChangeText={onChangeTextHandler}
          value={textItem}
          />
        <Button onPress={addItemToList} title="Add" />
      </View>
       {/* <View>
        {itemList.map(item => <View key={item.id} style={itemList}><Text>{item.value}</Text></View>)}
        </View>  */}

        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item=>item.id}
        />
        <Modal animationType='slide' visible={isModalVisible}>
          <View style={styles.modalMessageContainer}>
            <Text>Se eliminará la tarea:</Text>
            <Text>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title="Eliminar"
              onPress={()=>onDeleteItemHandler(itemSelected)}
              color='#ef233c'
            />
            <Button
              title="Cancelar"
              onPress={()=>setIsModalVisible(!isModalVisible)}
              color='#8d99ae'
            />
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginHorizontal:10,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
    width:300,
  },
  listItem: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding:10,
    margin:4,
    backgroundColor:'#a2d2ff',
    borderRadius: 10,
  },
  modalMessageContainer:{
    paddingTop:50,
    alignItems: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  }

});
