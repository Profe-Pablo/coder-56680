import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Ingresá la tarea'/>
        <Button onPress={null} title="Add" />
      </View>
      <View style={{backgroundColor:'skyblue',flex:1}}>
        
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
