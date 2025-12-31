import { StyleSheet, Text, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonForm from '../../components/common/form';
import { registerFormControls } from '../../config';
import { useState } from 'react';
import { Link } from 'expo-router';
import supabase from '../../config/supabaseClient';

const initialState = {
    name: "",
    email : "",
    password : "",
}

const Register = () => {
const [ formData, setFormData ] = useState(initialState);
const [ isLoading, setIsLoading ] = useState(false)

const onSubmit =  async () => {
 
   setIsLoading (true)
    const { data: { session }, error } = await supabase.auth.signUp({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
    console.log("Session: ", session);
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setIsLoading (false)
}

  return (
    <SafeAreaView style={styles.registerWrap}>
      <Text 
        style={{color: "#2ec6dd", textAlign:"center", fontSize:20, fontWeight:700, marginBottom:"5%"}}>Sign Up</Text>
      <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
          onSubmit={onSubmit}
      />
      <View style={{flexDirection:"row", marginTop:"4%", justifyContent:"space-between", alignItems:"center", paddingHorizontal:"2%"}}>
         <Text style={{color:"#ffffff"}}>You already have an account?</Text>
         <Link href="/login">
          <Text style={{color:"#ffffff", fontWeight:600, fontSize:16}}>Sign In</Text>
         </Link>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
registerWrap: {
    flex: 1,
    backgroundColor: "#000000ff",
    paddingHorizontal:"20%",
    justifyContent:"center"
  },
})