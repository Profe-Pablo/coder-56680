import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useState, useEffect } from 'react'
import { useSignUpMutation } from '../services/AuthService'
import { signupSchema } from '../validations/singupSchema'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMail, setErrorMail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
  
    try{ 
      signupSchema.validateSync({email,password,confirmPassword})
      triggerSignUp({email,password})
    }catch(error){
      console.log("Error al registrar usuario")
      console.log("Ruta: ", error.path)
      switch(error.path) {
        case 'email':
          setErrorMail(error.errors)
          break
        case 'password':
          setErrorPassword(error.errors)
          break
        case 'confirmPassword':
          setErrorConfirmPassword(error.errors)
          break
        default:
            break
      }
    }
    
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
            error={errorMail}
        />
        <Input
            label="Password:"
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
        />
        <Input
            label="Repetir password:"
            onChange={setConfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
        />
        <TouchableOpacity style={styles.btn} onPress={onSubmit}>
          <Text style={styles.btnText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.altContainer}>
          <Text style={styles.subtitle}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
              <Text style={styles.subtitleLink}>Ingresar</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignupScreen

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