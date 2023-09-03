import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => 
        [...prevState,{id: Math.random().toString(), value: textItem}]
      )
    setTextItem('')
  }

  useEffect(()=>console.log(textItem ),[textItem]) //Considerar si usarlo en la clase 4 o no.

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
      <View>
        {itemList.map(item => <View key={item.id} style={itemList}><Text>{item.value}</Text></View>)}
      </View>
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
  }
});
