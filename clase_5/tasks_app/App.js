import { StyleSheet, TextInput, View, Button, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import CustomItemModal from './components/CustomItemModal';
import CustomItemInput from './components/CustomItemInput';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)



  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState =>
      [...prevState, { id: Math.random().toString(), value: textItem }]
    )
    setTextItem('')
  }

  const onSelectItemHandler = (id) => {
    setIsModalVisible(!isModalVisible)
    setItemSelected(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelected.id))
    setItemSelected({})
    setIsModalVisible(!isModalVisible)
  }

  const renderListItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
        <Button onPress={() => onSelectItemHandler(item.id)} title='x' />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <CustomItemInput 
        placeholderProp="Ingresá la tarea"
        textItemProp={textItem}
        OnchangeTextHandlerEvent={onChangeTextHandler}
        addItemToListEvent={addItemToList}
      />
        

      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />

      <CustomItemModal
        animationTypeProp='slide'
        isVisibleProp={isModalVisible}
        itemSelectedProp={itemSelected}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setIsModalVisibleEvent={setIsModalVisible}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 4,
    backgroundColor: '#a2d2ff',
    borderRadius: 10,
  },


});
