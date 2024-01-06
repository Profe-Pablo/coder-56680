import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useState,useEffect } from 'react'
import { useLoginMutation } from '../services/AuthService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [triggerLogIn, result] = useLoginMutation()

  const dispatch = useDispatch()

  const onSubmit = () => {
    //console.log(result)
    triggerLogIn({email,password})
  }

  useEffect(()=> {
    if(result.data){
        //console.log("Result Login: ",result.data)
        dispatch(setUser(result.data))
    }
        
    
}, [result])

  return (
    <View style={styles.container}>
        <Input
            label="Email:"
            onChange={setEmail}
            error=""
        />
        <Input
            label="Password:"
            onChange={setPassword}
            error=""
            isSecure={true}
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.altContainer}>
          <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
              <Text style={styles.subtitleLink}>Crear una</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    gap:10,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.primaryBack,
    borderRadius: 8,
    margin: 5,
    
  },
  btnText:{
    color: "#fff",
    fontFamily: "Montserrat-Bold"
  },
  altContainer: {
    flexDirection: 'row',
    gap:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  subtitle:{
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize:12,
  },
  subtitleLink:{
    fontFamily: "Montserrat-Light",
    color: "#fff",
    fontSize:11,
    textDecorationLine: 'underline'
  }
})